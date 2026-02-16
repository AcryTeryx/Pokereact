import { createTransform } from 'redux-persist';

interface IQueryState {
    status: string;
}

interface IApiState {
    queries: Record<string, IQueryState>;
    mutations: Record<string, unknown>;
    config: unknown;
}

export const resetApiStatusTransform = createTransform(
   
    (pInboundState: IApiState) => {
        return { ...pInboundState };
    },

    (pOutboundState: IApiState) => {
        const lNewQueries = { ...pOutboundState.queries };

        Object.keys(lNewQueries).forEach((lKey) => {
            if (lNewQueries[lKey].status === 'pending') {
               
                lNewQueries[lKey] = {
                    ...lNewQueries[lKey],
                    status: 'uninitialized',
                };
            }
        });

        return {
            ...pOutboundState,
            queries: lNewQueries,
        };
    },
    { whitelist: ['pokemonApi'] }
);
