import Link from "next/link";

const fetchAPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return data;
}

export default async function Page({ params } : { params: { name: string } }) {

  const pokemon = await fetchAPokemon(params.name);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-20 text-black-400">{pokemon.name}</h1>
      {pokemon.sprites.front_default != null && <img src={pokemon.sprites.front_default} alt="Front Default" className="mx-auto" /> }
      {pokemon.sprites.front_female != null && <img src={pokemon.sprites.front_female} alt="Front Female" className="mx-auto" />} 
      {pokemon.sprites.front_shiny != null && <img src={pokemon.sprites.front_shiny} alt=" Front Shiny" className="mx-auto" /> }
      {pokemon.sprites.front_shiny_female != null && <img src={pokemon.sprites.front_shiny_female} alt="Front Shiny Female" className="mx-auto" />} 

      {pokemon.sprites.back_default != null && <img src={pokemon.sprites.back_default} alt="Back Default" className="mx-auto" /> }
      {pokemon.sprites.back_female != null && <img src={pokemon.sprites.back_female} alt="Back Female" className="mx-auto" /> }
      {pokemon.sprites.back_shiny != null && <img src={pokemon.sprites.back_shiny} alt="Back Shiny" className="mx-auto" /> }
      {pokemon.sprites.back_shiny_female != null && <img src={pokemon.sprites.back_shiny_female} alt="Back Shiny Female" className="mx-auto" /> }
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-5 mb-20">
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
