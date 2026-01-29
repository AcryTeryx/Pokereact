import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPokemon {
    id: number;
    name: string;
    image: string;
    apiTypes: {
        name: string;
        image: string;
    }[];
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokebuildapi.fr/api/v1/' }),
    endpoints: (pBuilder) => ({
        getPokemons: pBuilder.query<IPokemon[], void>({
            query: () => 'pokemon',
        }),
    }),
});

export const { useGetPokemonsQuery } = pokemonApi;
