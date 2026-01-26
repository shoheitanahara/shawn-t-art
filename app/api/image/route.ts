import { NextResponse } from "next/server";

// 画像フェッチはNode.jsランタイムで動かす（Edgeだと制限に当たりやすい）
export const runtime = "nodejs";

const DEFAULT_ALLOWED_HOSTS = new Set<string>([
  // OpenSea/CDN
  "i.seadn.io",
  // CryptoPunks
  "www.larvalabs.com",
  // Based Ape Gang
  "cdn.basedapes.wtf",
  // IPFS gateways
  "ipfs.io",
  "cloudflare-ipfs.com",
  "gateway.pinata.cloud",
  "nftstorage.link",
  // Arweave
  "arweave.net",
]);

const DEFAULT_ALLOWED_SUFFIXES = [
  ".ipfs.dweb.link",
  ".ipfs.nftstorage.link",
];

function buildAllowedHosts(): Set<string> {
  const extra = (process.env.IMAGE_PROXY_ALLOW_HOSTS ?? "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);

  const allowed = new Set(DEFAULT_ALLOWED_HOSTS);
  for (const host of extra) allowed.add(host);
  return allowed;
}

function isAllowedHost(host: string): boolean {
  const allowedHosts = buildAllowedHosts();
  if (allowedHosts.has(host)) return true;
  return DEFAULT_ALLOWED_SUFFIXES.some((suffix) => host.endsWith(suffix));
}

function validateRemoteUrl(rawUrl: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("Invalid src URL");
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("Unsupported protocol");
  }

  if (!isAllowedHost(parsed.hostname)) {
    throw new Error("Host is not allowed");
  }

  return parsed;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("src");
  if (!src) {
    return NextResponse.json({ error: "src is required" }, { status: 400 });
  }

  let remote: URL;
  try {
    remote = validateRemoteUrl(src);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid src";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    const upstream = await fetch(remote.toString(), {
      headers: {
        // 画像CDNがヘッダー依存するケースのため最低限付与
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
      },
      // 画像は不変に近いので強めにキャッシュ（必要ならrevalidateに変更可）
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${upstream.status}` },
        { status: 502 },
      );
    }

    const contentType =
      upstream.headers.get("content-type") ?? "application/octet-stream";
    const body = await upstream.arrayBuffer();

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // キャンバス合成で必要なため
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    return NextResponse.json(
      { error: "Failed to proxy image" },
      { status: 500 },
    );
  }
}

