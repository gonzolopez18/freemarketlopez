import React from 'react';
import './Counter.css';
import { useState } from 'react';


const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <div className="counter-text">{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Add to Cart</button>
        </div>
        );
}

export default Counter;