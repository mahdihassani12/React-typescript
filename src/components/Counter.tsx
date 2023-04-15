import React, { useReducer } from 'react';

type State = {
    count: number;
};

type Action =
    | { type: 'increment'; payload: number }
    | { type: 'decrement'; payload: number };

const initialState: State = {
    count: 0,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'increment', payload: 1 });
    };

    const handleDecrement = () => {
        dispatch({ type: 'decrement', payload: 1 });
    };

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;