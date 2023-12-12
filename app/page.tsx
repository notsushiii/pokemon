import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const fetchAllPokemon = async (url: string = "https://pokeapi.co/api/v2/pokemon") => {
  const response = await fetch(url);
  const data: PokemonApiResponse = await response.json();

  const allPokemon: Pokemon[] = data.results;

  if (data.next) {
    const morePokemon = await fetchAllPokemon(data.next);
    allPokemon.push(...morePokemon);
  }

  return allPokemon;
}

export default async function Home() {
  const pokemons = await fetchAllPokemon();

  console.log(pokemons);

  return (
    <div className="m-20">
      <h1 className="text-3xl font-bold pb-2 ml-0 text-black-400">Home</h1>
      <ol className="mx-auto">
        {pokemons.map((pokemon: Pokemon) => (
          <li key={pokemon.name} className="m-2 p-2 list-decimal text-align: left;">
            <Link href={`/pages/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ol>
    </div>
   
  )
}
