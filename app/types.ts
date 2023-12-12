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
