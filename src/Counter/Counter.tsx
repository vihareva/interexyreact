import React, {useEffect, useMemo, useRef, useState} from "react";
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterReducer'

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()


    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;