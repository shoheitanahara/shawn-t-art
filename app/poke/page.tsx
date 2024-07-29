'use client'

import { useState } from 'react';
import Image from 'next/image';
import {Card, CardTitle, CardContent } from '@/components/ui/card'; // Card, CardTitle, CardContentのインポート

export default function PokePage() {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // エラーをリセット
    try {
      const response = await fetch(`/api/poke?name=${pokemonName}`);
      if (!response.ok) {
        throw new Error('ポケモンデータの取得に失敗しました');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const spriteKeys = [
    // 画像の種類一覧 https://github.com/PokeAPI/sprites#sprites
    { key: 'front_default', label: '通常' },
    { key: 'front_female', label: 'メス' },
    { key: 'front_shiny', label: '色違い' },
    { key: 'other.official-artwork.front_default', label: '公式アート' },
    { key: 'other.dream_world.front_default', label: 'ドリームワールド' },
    { key: 'versions.generation-i.red-blue.front_default', label: '赤・青' },
    { key: 'versions.generation-i.yellow.front_default', label: '黄色' },
    { key: 'versions.generation-ii.crystal.front_default', label: 'クリスタル' },
    { key: 'versions.generation-ii.gold.front_default', label: 'ゴールド' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold my-6 flex flex-col items-center">ポケモン情報取得</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="ポケモンの名前を入力"
          required
          className="border border-gray-300 rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 w-32 hover:bg-blue-600 transition duration-200"
        >
          取得
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData && (
        <div className='flex flex-col items-center bg-white text-black m-24 p-6'>
          <h2 className="text-2xl font-bold my-6">{pokemonData.name}</h2>
          <div className="flex flex-wrap justify-center">
            {spriteKeys.map(({ key, label }) => {
              const spriteSrc = key.split('.').reduce((obj, part) => obj?.[part], pokemonData.sprites);
              return (
                spriteSrc && (
                  <Card key={key} className="m-4 p-4 w-1/4">
                    <CardTitle className="text-center font-semibold mb-2">{label}</CardTitle>
                    <CardContent className="flex flex-col items-center">
                      <Image src={spriteSrc} alt={`${pokemonData.name} - ${label}`} width={100} height={100} />
                    </CardContent>
                  </Card>
                )
              );
            })}
          </div>
          <p className="text-lg font-semibold">高さ: {pokemonData.height}</p>
          <p className="text-lg font-semibold">重さ: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
}