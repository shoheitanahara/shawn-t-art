import { NextResponse } from 'next/server';
import fetch from 'node-fetch'; // node-fetchをインポート

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url'); // 修正: URLを直接取得

    // URLがnullの場合の処理を追加
    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    console.log(url);
    const response = await fetch(url!); // 修正: urlを非nullアサーションで強制
    if (!response.ok) { // 修正: レスポンスが正常か確認
        throw new Error('Network response was not ok'); // エラーハンドリングを追加
    }
    const html = await response.text();
    const waitForLoad = async () => {
        // 動的コンテンツが読み込まれるまで待機
        return new Promise(resolve => setTimeout(resolve, 5000)); // 5秒待機
    };
    await waitForLoad(); // 修正: 動的コンテンツの読み込みを待つ

    // HTMLから必要なデータを抽出
    // タイトルの正規表現を修正
    const titleMatch = html.match(/<h1.*?title="(.*?)">/);
    const title = titleMatch ? titleMatch[1] : 'Unknown Title';

    // オーナーの正規表現を修正
    const ownerMatch = html.match(/Owned by<!-- -->&nbsp;<span class="sc-beff130f-0 hksMfk"><a.*?><div.*?>(\w+)<\/div><\/a><\/span>/);
    const owner = ownerMatch ? ownerMatch[1].trim() : 'Unknown Owner'; // trim()を追加

    // クリエイターの正規表現を修正
    const creatorMatch = html.match(/(?<=href="\/[a-zA-Z0-9_]+\/created"><span class="text-sm leading-sm font-semibold sc-b6bd9c33-0 bqzFos" data-id="TextBody">)([^<]+)(?=<\/span>)/); 
    console.log(creatorMatch);
    const creator = creatorMatch ? creatorMatch[1].trim() : 'Unknown Creator'; // trim()を追加

    // 画像URLの正規表現を修正
    const imageUrlMatch = html.match(/<img.*?class="Image--image".*?src="(.*?)"/); // 修正: imgタグからsrcを取得
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : ''; // 修正: imageUrlMatchを使用

    console.log(title, owner, creator, imageUrl);

    return NextResponse.json({
        title,
        owner,
        creator,
        imageUrl,
    });
}