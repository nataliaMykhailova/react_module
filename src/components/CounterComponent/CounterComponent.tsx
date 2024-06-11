import React, {useRef} from 'react';

import {
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount,
    reset,
    useAppDispatch,
    useAppSelector
} from "../../redux/store";

import css from './CounterComponent.module.css'


const CounterComponent = () => {
    const inc = useRef<HTMLInputElement>(null);
    const dec = useRef<HTMLInputElement>(null);
    const {value} = useAppSelector(state => state.slice1);
    const dispatch = useAppDispatch();
    const handleIncrement = () => {
        const number = inc.current?.value;
        if (number) {
            dispatch(incrementByAmount(+number))
            inc.current.value='';
        }
    }
    const handleDecrement = () => {
        const number = dec.current?.value;
        if (number) {
            dispatch(decrementByAmount(+number));
            dec.current.value='';
        }
    }
    return (
        <div className={css.container}>
            <h1>{value}</h1>
            <div className={css.counter}>
                <button onClick={() => dispatch(increment())}>increment</button>

                <button onClick={() => dispatch(decrement())}>decrement</button>

                <div className={css.box}>
                    <input type={"number"} placeholder={"enter your number"} ref={inc}/>
                    <button onClick={() => handleIncrement()}>increment by amount</button>
                </div>

                <div className={css.box}>
                    <input type={"number"} placeholder={"enter your number"} ref={dec}/>
                    <button onClick={() => handleDecrement()}>decrement by amount</button>
                </div>
            </div>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    );
};

export default CounterComponent;