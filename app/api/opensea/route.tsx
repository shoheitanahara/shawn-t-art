import { NextResponse } from 'next/server';
import fetch from 'node-fetch'; // node-fetchをインポート

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url'); // 修正: URLを直接取得

    // URLがnullまたは無効な場合の処理を追加
    if (!url || !url.startsWith('https://opensea.io/assets/')) {
        return NextResponse.json({ error: 'Valid OpenSea URL is required' }, { status: 400 });
    }

    try {
        const response = await fetch(url); // 修正: urlを非nullアサーションで強制
        if (!response.ok) { // 修正: レスポンスが正常か確認
            return NextResponse.json({ error: 'Network response was not ok' }, { status: 500 });
        }
        const html = await response.text();

        // HTMLから必要なデータを抽出
        const titleMatch = html.match(/<h1.*?title="(.*?)">/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Title';

        const ownerMatch = html.match(/Owned by<!-- -->&nbsp;<span class="sc-beff130f-0 hksMfk"><a.*?><div.*?>(\w+)<\/div><\/a><\/span>/);
        const owner = ownerMatch ? ownerMatch[1].trim() : 'Unknown Owner';

        // 修正: 先読みを使用せずに正規表現を変更
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
        responseJson.headers.set('Access-Control-Allow-Origin', 'https://opensea.io'); // OpenSeaのオリジンを許可
        return responseJson;
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
    }
}