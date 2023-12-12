import { NextResponse } from "next/server";


const fetchAllPokemons = async (url: string = "https://pokeapi.co/api/v2/pokemon") => {
  const response = await fetch(url);
  const data: PokemonApiResponse = await response.json();

  const allPokemon: Pokemon[] = data.results;

  if (data.next) {
    const morePokemon = await fetchAllPokemons(data.next);
    allPokemon.push(...morePokemon);
  }

  return allPokemon;
}


export async function GET() {
    const allPokemon = await fetchAllPokemons();
    return NextResponse.json(allPokemon);
}