import { NextApiRequest } from "next";
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

export async function GET(request: NextApiRequest) {
    const allPokemon = await fetchAllPokemons();
    const url = request.url || "https://pokeapi.co/api/v2/pokemon"; 
    const { searchParams } = new URL(url);
    const query = searchParams.get("query") ?? ""; // Use optional chaining and provide a default value
    const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.startsWith(query.toLowerCase()));
    return NextResponse.json(filteredPokemon);
}