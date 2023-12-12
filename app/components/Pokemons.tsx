import Link from "next/link";
import  '../types';

export default function Pokemons({pokemons}: {pokemons: Pokemon[]}) {
  return (
    <div>
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