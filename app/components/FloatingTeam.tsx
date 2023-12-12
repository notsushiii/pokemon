'use client';

import { useGlobalContext } from "../context/team";

export default function FloatingTeam() {
    const { team } = useGlobalContext();

    return (
        <div className="fixed top-20 right-20">
            <div className="w-full max-w-md p-4 bg-gray-500 rounded-lg border border-gray-300 hover:bg-gray-800 rounded-lg shadow sm:p-8 ">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Team</h5>
                </div>
                <div className="flow-root">
                    <ul role="list">
                        {team.pokemonNames.map((pokemonName: string) => (
                            <li className="py-1" key={pokemonName}>
                                <div className="flex-1 min-w-0 flex items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {pokemonName}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

