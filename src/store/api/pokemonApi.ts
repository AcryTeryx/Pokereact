import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPokemon {
    pokedex_id: number;
    generation: number;
    category: string;
    name: {
        fr: string;
        en: string;
        jp: string;
    };
    sprites: {
        regular: string;
        shiny: string | null;
        gmax: unknown;
    };
    types: {
        name: string;
        image: string;
        index: number;
    }[] | null;
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tyradex.app/api/v1/' }),
    endpoints: (pBuilder) => ({
        getPokemons: pBuilder.query<IPokemon[], void>({
            query: () => 'pokemon',
        }),
    }),
});

export const { useGetPokemonsQuery } = pokemonApi;
