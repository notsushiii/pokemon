'use client';

import { useGlobalContext } from "../context/team";
import "../types";

export default function TeamMgmt({pokemonName} : {pokemonName: string}) {

    const {team, setTeam} = useGlobalContext();

    const removeFromTeam = () => {
        setTeam({size: team.size - 1, pokemonNames: team.pokemonNames.filter((poke) => poke !== pokemonName)})
    }
    
    const addToTeam = () => {
        setTeam({size: team.size + 1, pokemonNames: [...team.pokemonNames, pokemonName]})
    }

    if (team.pokemonNames.includes(pokemonName)) {
        return (
            <button className="bg-red-50 hover:bg-red-100 text-red-700 font-bold border border-red-700 py-2 px-4 rounded shadow" onClick={removeFromTeam} >
                Remove from Team
            </button>
        )
    } else if (team.size < 6) {
        return (
            <button className="bg-green-50 hover:bg-green-100 text-green-800 border border-green-800 font-bold py-2 px-4 rounded shadow" onClick={addToTeam}>
                Add to Team
            </button>
        )
    } 
}