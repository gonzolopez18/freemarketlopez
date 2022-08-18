import './Counter.css';
import { useState } from 'react';


const Counter = ({stock = 0, initialCount = 1, onAddHandler }) => {
    console.log('en counter recibo initialCount = ' + initialCount);
     const [qty, setQty] = useState(initialCount);
    console.log('en counter tengo qty = ' + qty);
     
   const increment = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    const decrement = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    return (
        <div className="container-md counter">
            <div className="row justify-content-center">
                <div className="col-2">
                    <button className="btn btn-light" onClick={decrement}>-</button>
                </div>
                <div className="col-2">
                    <span class="badge bg-secondary">{qty}</span>
                </div>
                <div className="col-2">
                    <button className="btn btn-light" onClick={increment}>+</button>
                </div>
            </div>
            <button className="btn btn-dark" onClick={() => onAddHandler(qty)}>Add to Cart</button>

        </div>
        );
}

export default Counter;