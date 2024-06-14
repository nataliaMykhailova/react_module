import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {userSlice} from "./slices/UserSlice";
import {postSlice} from "./slices/PostSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();