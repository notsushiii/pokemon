'use client'

import { useState, useEffect } from 'react';
import Pokemons from "./components/Pokemons";
import SearchPokemons from './components/SearchPokemons';
import FloatingTeam from './components/FloatingTeam';
import './types';

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setPokemons(data);
    }

    getPokemons();
  }, []);

  return (
    <div className="m-20 min-w-screen grid grid-cols-2">  
      <div>
      <h1 className="text-3xl font-bold pb-2 ml-0 text-black-400">Home</h1>
        <SearchPokemons getSearchResults={(results) => setPokemons(results)} />
        <Pokemons pokemons={pokemons} />
      </div>
      <FloatingTeam />
    </div>

  )
}
