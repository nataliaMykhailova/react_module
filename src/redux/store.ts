import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {counterSlice} from "./slises/slise1";


export const {increment,
decrement,
incrementByAmount,
decrementByAmount,
reset} = counterSlice.actions;
export const store = configureStore({
    reducer: {
        slice1: counterSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();