import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './api/pokemonApi';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { resetApiStatusTransform } from './persistence/transformers';

const lPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['pokemonApi'],
  transforms: [resetApiStatusTransform],
}

const lRootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

const lPersistedReducer = persistReducer(lPersistConfig, lRootReducer as any);

export const store = configureStore({
  reducer: lPersistedReducer as any,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store); 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
