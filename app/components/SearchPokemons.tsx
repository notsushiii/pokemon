import { SetStateAction, useState } from 'react';
import '../types';

export default function SearchPokemons({ getSearchResults }: { getSearchResults: (value: SetStateAction<Pokemon[]>) => void }) {

    const [query, setQuery] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch(`/api/search?query=${query}`);

        const data = await response.json();

        getSearchResults(data);
    }

    return (
        <form className="flex items-center my-2" onSubmit={handleSubmit}>
            <div className="relative flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                <input
                    type="text"
                    id="simple-search"
                    className="bg-transparent text-gray-900 text-sm py-2.5 px-4 w-full focus:outline-none"
                    placeholder="Search pokemon name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="p-3 text-sm font-medium text-white bg-gray-500 rounded-lg border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-2"
            >
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>



    )
}

