import './Counter.css';
import { useState, useEffect } from 'react';


const Counter = ({stock = 0, initialCount = 1, onAddHandler }) => {
    const [qty, setQty] = useState(initialCount);
     useEffect(() => {
        setQty(initialCount)
   }, [initialCount])

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
                    <span className="badge bg-secondary">{qty}</span>
                </div>
                <div className="col-2">
                    <button className="btn btn-light" onClick={increment}>+</button>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => onAddHandler(qty)}>Add to Cart</button>

        </div>
        );
}

export default Counter;