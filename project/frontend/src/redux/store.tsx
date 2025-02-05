import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';

export const store = configureStore({
    reducer: {
        contacts: contactSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
