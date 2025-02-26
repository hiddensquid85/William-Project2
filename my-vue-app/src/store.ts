import { configureStore } from "@reduxjs/toolkit";
import starshipReducer from './starshipSlice';

const store = configureStore({
    reducer: {
        starship: starshipReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;