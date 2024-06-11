import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}
const initialState: CounterStateType = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counterSliceName',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
                state.value += action.payload;
        },
        decrementByAmount:(state, action:PayloadAction<number>)=>{
            state.value -= action.payload
        },
        reset: (state) => {
            state.value = initialState.value;
        },

    }
});
