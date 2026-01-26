import { NextResponse } from "next/server";
import {
  createPublicClient,
  getAddress,
  http,
  isAddress,
  parseAbiItem,
  zeroAddress,
} from "viem";
import {
  apeChain,
  arbitrum,
  avalanche,
  base,
  bsc,
  mainnet,
  optimism,
  polygon,
} from "viem/chains";
import type { Chain } from "viem/chains";

// Buffer / RPCアクセスを使うためNode.jsランタイムで動かす
export const runtime = "nodejs";

type CacheEntry<T> = {
  expiresAt: number;
  value: Promise<T>;
};

// Next.jsのNode.jsランタイムではプロセスが生きている間はメモリが保持されるため、
// 同一コントラクト/同一tokenへの繰り返しアクセスがかなり高速化される。
const metadataCache = new Map<string, CacheEntry<unknown>>();
const deployerCache = new Map<string, CacheEntry<string | null>>();

function getOrSetCache<T>(
  map: Map<string, CacheEntry<T>>,
  key: string,
  ttlMs: number,
  factory: () => Promise<T>,
): Promise<T> {
  const now = Date.now();
  const existing = map.get(key);
  if (existing && existing.expiresAt > now) return existing.value;

  const value = factory().catch((error) => {
    // 失敗結果をキャッシュし続けない
    map.delete(key);
    throw error;
  });

  map.set(key, { expiresAt: now + ttlMs, value });
  return value;
}

type NftResponse = {
  title: string;
  owner: string;
  creator: string;
  imageUrl: string;
};

function isWalletAddress(value: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

const CRYPTOPUNKS_CONTRACT = getAddress(
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
);

const CRYPTOPUNKS_ABI = [
  {
    type: "function",
    name: "punkIndexToAddress",
    stateMutability: "view",
    inputs: [{ name: "punkIndex", type: "uint256" }],
    outputs: [{ type: "address" }],
  },
] as const;

const ERC721_LIKE_ABI = [
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "ownerOf",
    stateMutability: "view",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ type: "address" }],
  },
  {
    type: "function",
    name: "tokenURI",
    stateMutability: "view",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ type: "string" }],
  },
  // ERC1155互換（ERC721でtokenURIが無いコントラクトもあるのでフォールバック）
  {
    type: "function",
    name: "uri",
    stateMutability: "view",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ type: "string" }],
  },
] as const;

// 環境によってはcloudflare-ipfs.comがDNS解決できないため、ipfs.ioをデフォルトに
const DEFAULT_IPFS_GATEWAY = "https://ipfs.io/ipfs/";

function normalizeDecentralizedUri(uri: string): string {
  const trimmed = uri.trim();
  if (trimmed.startsWith("ipfs://")) {
    const path = trimmed.replace("ipfs://", "").replace(/^ipfs\//, "");
    return `${process.env.IPFS_GATEWAY_BASE ?? DEFAULT_IPFS_GATEWAY}${path}`;
  }
  if (trimmed.startsWith("ar://")) {
    return `https://arweave.net/${trimmed.replace("ar://", "")}`;
  }
  return trimmed;
}

async function decodeTokenUriToJson(
  tokenUri: string,
  tokenId: bigint,
): Promise<unknown> {
  const cacheKey = `${tokenUri}::${tokenId.toString()}`;
  return getOrSetCache(metadataCache, cacheKey, 60 * 60 * 1000, async () => {
  const normalizedTemplate = normalizeDecentralizedUri(tokenUri);

  const urisToTry = (() => {
    if (!normalizedTemplate.includes("{id}")) return [normalizedTemplate];

    // ERC1155は実装により `{id}` の期待形式が揺れるため、複数パターンでフォールバックする
    const candidates = [
      // ERC1155仕様の一般形（32byte=64桁hex, 0x無し, lower）
      normalizedTemplate.replaceAll("{id}", formatErc1155Id(tokenId)),
      // 一部のコントラクトは10進tokenIdを使う
      normalizedTemplate.replaceAll("{id}", tokenId.toString()),
      // 0埋めなしhex
      normalizedTemplate.replaceAll("{id}", tokenId.toString(16)),
      // 0x付きhex
      normalizedTemplate.replaceAll("{id}", `0x${tokenId.toString(16)}`),
    ];
    return Array.from(new Set(candidates));
  })();

  let lastStatus: number | null = null;

  for (const url of urisToTry) {
    if (url.startsWith("data:")) {
      // 例: data:application/json;base64,xxxx / data:application/json;utf8,{...}
      const commaIndex = url.indexOf(",");
      if (commaIndex === -1) throw new Error("Invalid data URI");
      const meta = url.slice(0, commaIndex);
      const payload = url.slice(commaIndex + 1);

      if (meta.includes(";base64")) {
        const jsonText = Buffer.from(payload, "base64").toString("utf8");
        return JSON.parse(jsonText);
      }
      return JSON.parse(decodeURIComponent(payload));
    }

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 * 60 },
    });

    lastStatus = res.status;
    if (!res.ok) continue;
    return res.json();
  }

  throw new Error(
    `Failed to fetch token metadata: ${lastStatus ?? "unknown"}`,
  );
  });
}

function pickImageUrl(metadata: any): string | null {
  const raw =
    metadata?.image ??
    metadata?.image_url ??
    metadata?.imageUrl ??
    metadata?.animation_url ??
    null;
  if (typeof raw !== "string" || raw.trim() === "") return null;
  return normalizeDecentralizedUri(raw);
}

function pickTitle(metadata: any, fallback: string): string {
  const name = metadata?.name;
  if (typeof name === "string" && name.trim() !== "") return name.trim();
  return fallback;
}

function pickCreator(metadata: any): string | null {
  const candidates = [
    metadata?.creator,
    metadata?.artist,
    metadata?.author,
    metadata?.createdBy,
    metadata?.properties?.creator,
    metadata?.properties?.artist,
    metadata?.properties?.author,
    metadata?.properties?.created_by,
    metadata?.created_by,
  ];
  for (const value of candidates) {
    if (typeof value === "string" && value.trim() !== "") return value.trim();
  }
  return null;
}

const ERC721_TRANSFER_EVENT = parseAbiItem(
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
);

async function findContractCreationBlock(params: {
  client: ReturnType<typeof createPublicClient>;
  contractAddress: `0x${string}`;
}): Promise<bigint | null> {
  const latest = await params.client.getBlockNumber();

  let low = 0n;
  let high = latest;

  // コントラクトが存在しないアドレスの場合は早期return
  const latestCode = await params.client.getBytecode({
    address: params.contractAddress,
    blockNumber: latest,
  });
  if (!latestCode || latestCode === "0x") return null;

  // 二分探索で「初めてコードが現れるブロック」を探す
  while (low < high) {
    const mid = (low + high) / 2n;
    const code = await params.client.getBytecode({
      address: params.contractAddress,
      blockNumber: mid,
    });

    if (code && code !== "0x") {
      high = mid;
    } else {
      low = mid + 1n;
    }
  }

  return low;
}

async function resolveCreatorFromContractDeployer(params: {
  client: ReturnType<typeof createPublicClient>;
  contractAddress: `0x${string}`;
}): Promise<string | null> {
  const chainId = params.client.chain?.id ?? 0;
  const cacheKey = `${chainId}:${params.contractAddress.toLowerCase()}`;

  // deployerは不変なので長めにキャッシュ（24h）
  return getOrSetCache(deployerCache, cacheKey, 24 * 60 * 60 * 1000, async () => {
  // Collectionの「Created by」に近い値として、コントラクト作成トランザクションのfrom（デプロイヤ）を採用する
  // ※ 厳密な「作者」ではないが、ownerと同一になりにくく、APIキー無しで安定して取得できる
  const creationBlock = await findContractCreationBlock(params).catch(() => null);
  if (creationBlock === null) return null;

  const block = await params.client.getBlock({
    blockNumber: creationBlock,
    includeTransactions: true,
  });

  const txs = block.transactions;
  for (const tx of txs) {
    // コントラクト作成txは `to` が null
    if (tx.to !== null) continue;
    const receipt = await params.client
      .getTransactionReceipt({ hash: tx.hash })
      .catch(() => null);
    if (!receipt?.contractAddress) continue;
    if (getAddress(receipt.contractAddress) !== params.contractAddress) continue;
    return getAddress(tx.from);
  }

  return null;
  });
}

async function resolveCreatorFromMintTransfer(params: {
  client: ReturnType<typeof createPublicClient>;
  contractAddress: `0x${string}`;
  tokenId: bigint;
}): Promise<string | null> {
  // ERC721のmintは Transfer(from=0x0, to=?, tokenId) になることが多い
  // 注意: ProviderによってはfromBlock=0が拒否されるので、その場合はnullにフォールバックする
  const logs = await params.client
    .getLogs({
      address: params.contractAddress,
      event: ERC721_TRANSFER_EVENT,
      args: { from: zeroAddress, tokenId: params.tokenId },
      fromBlock: 0n,
      toBlock: "latest",
    })
    .catch(() => []);

  if (logs.length === 0) return null;

  const sorted = [...logs].sort((a, b) => {
    const bnA = Number(a.blockNumber ?? 0n);
    const bnB = Number(b.blockNumber ?? 0n);
    if (bnA !== bnB) return bnA - bnB;
    const liA = Number(a.logIndex ?? 0n);
    const liB = Number(b.logIndex ?? 0n);
    return liA - liB;
  });

  const to = sorted[0]?.args?.to;
  if (!to) return null;
  return getAddress(to);
}

function resolveChain(chainSegment: string) {
  const segment = chainSegment.toLowerCase();
  const normalized =
    segment === "eth"
      ? "ethereum"
      : segment === "matic"
        ? "polygon"
        : segment === "arb"
          ? "arbitrum"
          : segment === "op"
            ? "optimism"
            : segment === "ape"
              ? "apechain"
              : segment === "avax"
                ? "avalanche"
                : segment === "bnb" || segment === "binance"
                  ? "bsc"
        : segment;

  // 主要EVMチェーン（OpenSeaの `{chain}` と合わせる）
  // NOTE: デフォルトRPCは「無料かつ比較的安定」を優先。必要に応じて環境変数で上書き。
  const table: Record<
    string,
    { chain: Chain; rpcUrl: string }
  > = {
    ethereum: {
      chain: mainnet,
      rpcUrl: process.env.ETHEREUM_RPC_URL ?? "https://ethereum.publicnode.com",
    },
    polygon: {
      chain: polygon,
      rpcUrl: process.env.POLYGON_RPC_URL ?? "https://polygon-bor.publicnode.com",
    },
    base: {
      chain: base,
      rpcUrl: process.env.BASE_RPC_URL ?? "https://base.publicnode.com",
    },
    arbitrum: {
      chain: arbitrum,
      rpcUrl: process.env.ARBITRUM_RPC_URL ?? "https://arbitrum.publicnode.com",
    },
    optimism: {
      chain: optimism,
      rpcUrl: process.env.OPTIMISM_RPC_URL ?? "https://optimism.publicnode.com",
    },
    apechain: {
      chain: apeChain,
      rpcUrl: process.env.APECHAIN_RPC_URL ?? "https://rpc.apechain.com",
    },
    avalanche: {
      chain: avalanche,
      rpcUrl: process.env.AVALANCHE_RPC_URL ?? "https://avalanche.publicnode.com",
    },
    bsc: {
      chain: bsc,
      rpcUrl: process.env.BSC_RPC_URL ?? "https://bsc.publicnode.com",
    },
  };

  return table[normalized] ?? null;
}

function parseOpenSeaAssetUrl(rawUrl: string): {
  chainSegment: string;
  contractAddress: `0x${string}`;
  tokenId: bigint;
} {
  const parsed = new URL(rawUrl);
  // OpenSeaは /assets/... と /item/... の両方が使われる
  if (parsed.hostname !== "opensea.io" && parsed.hostname !== "www.opensea.io") {
    throw new Error("Invalid OpenSea host");
  }

  // 例:
  // - /assets/ethereum/0xabc.../123
  // - /item/ethereum/0xabc.../123
  const parts = parsed.pathname.split("/").filter(Boolean);
  if (parts.length < 4) throw new Error("Invalid OpenSea asset URL path");

  const kind = parts[0];
  if (kind !== "assets" && kind !== "item") {
    throw new Error("Invalid OpenSea asset URL path");
  }

  const chainSegment = parts[1];
  const contract = parts[2];
  const tokenIdRaw = parts[3];

  if (!isAddress(contract)) throw new Error("Invalid contract address");

  let tokenId: bigint;
  try {
    // OpenSeaは通常10進数
    tokenId = BigInt(tokenIdRaw);
  } catch {
    throw new Error("Invalid tokenId");
  }

  return {
    chainSegment,
    contractAddress: getAddress(contract),
    tokenId,
  };
}

function formatErc1155Id(tokenId: bigint): string {
  // ERC1155のURI仕様: {id} は 32byte(64桁)のlowercase hex（0x無し）
  return tokenId.toString(16).padStart(64, "0").toLowerCase();
}

async function resolveTokenUri(params: {
  client: ReturnType<typeof createPublicClient>;
  contractAddress: `0x${string}`;
  tokenId: bigint;
}): Promise<string> {
  const { client, contractAddress, tokenId } = params;

  const tokenUri = await client
    .readContract({
      address: contractAddress,
      abi: ERC721_LIKE_ABI,
      functionName: "tokenURI",
      args: [tokenId],
    })
    .catch(() => null);

  if (typeof tokenUri === "string" && tokenUri.trim() !== "") {
    return tokenUri;
  }

  const uri = await client
    .readContract({
      address: contractAddress,
      abi: ERC721_LIKE_ABI,
      functionName: "uri",
      args: [tokenId],
    })
    .catch(() => null);

  if (typeof uri === "string" && uri.trim() !== "") {
    // ERC1155 `{id}` の置換形式はコントラクトごとに揺れるため、ここではテンプレートをそのまま返す。
    // 実際の置換・フォールバックは decodeTokenUriToJson 側で行う。
    return uri;
  }

  throw new Error(
    "tokenURI/uri を取得できませんでした（未Mint/Lazy mint、またはコントラクト非対応の可能性があります）",
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Valid OpenSea URL is required" },
      { status: 400 },
    );
  }

  try {
    const { chainSegment, contractAddress, tokenId } = parseOpenSeaAssetUrl(url);
    const resolved = resolveChain(chainSegment);
    if (!resolved) {
      return NextResponse.json(
        { error: "Unsupported chain in OpenSea URL" },
        { status: 400 },
      );
    }

    const client = createPublicClient({
      chain: resolved.chain,
      transport: http(resolved.rpcUrl),
    });

    // CryptoPunksはERC721のtokenURI/ownerOfに非対応なため、専用処理で対応
    if (contractAddress === CRYPTOPUNKS_CONTRACT && resolved.chain.id === mainnet.id) {
      const owner = await client
        .readContract({
          address: contractAddress,
          abi: CRYPTOPUNKS_ABI,
          functionName: "punkIndexToAddress",
          args: [tokenId],
        })
        .catch(() => null);

      const larvaLabsImageUrl = `https://www.larvalabs.com/cryptopunks/cryptopunk${tokenId.toString()}.png`;

      const responseBody: NftResponse = {
        title: `CryptoPunk #${tokenId.toString()}`,
        owner: typeof owner === "string" ? getAddress(owner) : "Unknown Owner",
        // APIキー無しで「作者」を厳密に確定するのは難しいので、プロジェクト名を表示
        creator: "Larva Labs",
        imageUrl: `/api/image?src=${encodeURIComponent(larvaLabsImageUrl)}`,
      };

      return NextResponse.json(responseBody);
    }

    const [collectionName, owner, tokenUri] = await Promise.all([
      client
        .readContract({
          address: contractAddress,
          abi: ERC721_LIKE_ABI,
          functionName: "name",
        })
        .catch(() => null),
      client
        .readContract({
          address: contractAddress,
          abi: ERC721_LIKE_ABI,
          functionName: "ownerOf",
          args: [tokenId],
        })
        .catch(() => null),
      resolveTokenUri({ client, contractAddress, tokenId }),
    ]);

    const metadata = await decodeTokenUriToJson(tokenUri, tokenId);
    const image = pickImageUrl(metadata);
    if (!image) {
      return NextResponse.json(
        { error: "Failed to resolve NFT image from metadata" },
        { status: 502 },
      );
    }

    const fallbackTitle = `${collectionName ?? "NFT"} #${tokenId.toString()}`;
    const title = pickTitle(metadata, fallbackTitle);
    // APIキーなしで「作者」を厳密に確定するのは難しいため、表示としては
    // OpenSeaのコレクション名に近い「コントラクト名」を優先する。
    // メタデータ由来の creator がウォレットアドレスっぽい場合は採用しない。
    const creatorFromMetadata = pickCreator(metadata);
    const creator =
      (creatorFromMetadata && !isWalletAddress(creatorFromMetadata)
        ? creatorFromMetadata
        : null) ??
      (collectionName ?? null) ??
      (await resolveCreatorFromContractDeployer({ client, contractAddress })) ??
      (await resolveCreatorFromMintTransfer({ client, contractAddress, tokenId })) ??
      (typeof owner === "string" ? owner : null) ??
      "Unknown Creator";

    const responseBody: NftResponse = {
      title,
      owner: typeof owner === "string" ? owner : "Unknown Owner",
      creator,
      // キャンバス合成時のCORS/tainted canvas対策として同一オリジンで画像を配信
      imageUrl: image.startsWith("data:")
        ? image
        : `/api/image?src=${encodeURIComponent(image)}`,
    };

    return NextResponse.json(responseBody);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("NFT fetch error:", error);
    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}