import { configureStore } from "@reduxjs/toolkit";
import globalState from './reducers/globalReducer'

export const store = configureStore({
    reducer:{
        state:globalState
    },
});

export type RootState = ReturnType<typeof store.getState>