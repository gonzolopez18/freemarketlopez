import React from 'react';
import './Counter.css';
import { useState } from 'react';


const Counter = ({stock, onAddHandler }) => {
    const [count, setCount] = useState(1);
    const handleOnAdd = (qty) => {
        console.log(`se agregarán ${qty} unidades del producto al carro`);
      }
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
        <div className="container-md counter">
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
            <button className="btn btn-dark" onClick={() => onAddHandler(count)}>Add to Cart</button>

        </div>
        );
}

export default Counter;