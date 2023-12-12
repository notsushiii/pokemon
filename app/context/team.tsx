'use client';

import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
import '../types';

interface Team {
    size: number;
    pokemonNames: string[];
}

interface TeamContextType {
    team: Team;
    setTeam: Dispatch<SetStateAction<Team>>;
}

const GlobalContext = createContext<TeamContextType>({
    team: {
        size: 0,
        pokemonNames: new Array<string>()
    },
    setTeam: (): {
        size: number;
        pokemonNames: string[];
    } => {
        return {
            size: 0,
            pokemonNames: new Array<string>()
        }
    }
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [team, setTeam] = useState<Team>({
        size: 0,
        pokemonNames: new Array<string>()
    });

    return (
        <GlobalContext.Provider value={{ team, setTeam }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);