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
        <div className="container-md">
            <div className="row justify-content-center">
                <div className="col-2">
                    <button className="btn btn-light" onClick={decrement}>-</button>
                </div>
                <div className="col-2">
                    <span class="badge bg-secondary">{count}</span>
                </div>
                <div className="col-2">
                    <button className="btn btn-light" onClick={increment}>+</button>
                </div>
            </div>
            <button className="btn btn-dark" onClick={() => onAdd(count)}>Add to Cart</button>

        </div>
        );
}

export default Counter;