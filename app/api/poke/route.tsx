import { NextResponse } from "next/server";

// PokéAPIからポケモンデータを取得する関数
async function fetchPokemonData(pokemonName: string | undefined) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  return response.json();
}

// GETリクエストを処理するエンドポイント
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pokemonName = searchParams.get("name")?.toLowerCase();

  try {
    const pokemonData = await fetchPokemonData(pokemonName);
    return NextResponse.json(pokemonData);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Pokémon data" },
      { status: 500 }
    );
  }
}