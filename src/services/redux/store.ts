import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

import productReducer from './slices/product';
import userReducer from './slices/user';

const persistConfig = {
    key: 'tictag-test-webapp',
    storage: localStorage,
    whitelist: ['user', 'product'],
    keyPrefix: '',
    timeout: 500
};

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);
