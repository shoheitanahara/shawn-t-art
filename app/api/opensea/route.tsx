import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

// リクエストを送信する関数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async (url: string) => {
    await delay(5000); // 5秒待機
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/89.0',
            'Accept': 'application/json',
            'Referer': 'https://opensea.io/'
        }
    });
    return response;
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    // URLがnullまたは無効な場合の処理
    if (!url || !url.startsWith('https://opensea.io/assets/')) {
        console.log("catch: invalid url");
        return NextResponse.json({ error: 'Valid OpenSea URL is required' }, { status: 400 });
    }

    try {
        console.log("catch: " + url);
        const response = await fetchData(url);

        // レスポンスの状態を出力
        console.log("catch: response status: " + response.status);
        console.log("catch: response ok: " + response.ok);

        if (!response.ok) {
            console.log("catch: response not ok");
            return NextResponse.json({ error: 'Network response was not ok' }, { status: 500 });
        }
        const html = await response.text();

        // HTMLから必要なデータを抽出
        const titleMatch = html.match(/<h1.*?title="(.*?)">/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Title';

        const ownerMatch = html.match(/Owned by<!-- -->&nbsp;<span class="sc-beff130f-0 hksMfk"><a.*?><div.*?>(\w+)<\/div><\/a><\/span>/);
        const owner = ownerMatch ? ownerMatch[1].trim() : 'Unknown Owner';

        const creatorMatch = html.match(/href="\/[a-zA-Z0-9_]+\/created"><span class="text-sm leading-sm font-semibold sc-b6bd9c33-0 bqzFos" data-id="TextBody">([^<]+)<\/span>/);
        const creator = creatorMatch ? creatorMatch[1].trim() : 'Unknown Creator';

        const imageUrlMatch = html.match(/<img.*?class="Image--image".*?src="(.*?)"/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

        // CORSヘッダーをOpenSeaのオリジンに設定
        const responseJson = NextResponse.json({
            title,
            owner,
            creator,
            imageUrl,
        });

        return responseJson;
    } catch (error) {
        console.error("Fetch error:", error); // エラーログ
        return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
    }
}