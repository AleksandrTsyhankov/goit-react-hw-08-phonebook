import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-slice';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        phonebook: phonebookReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({serializableCheck: false}), thunk],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);