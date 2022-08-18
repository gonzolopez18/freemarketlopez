import React from 'react';
import { useContext } from "react";
import { CartInfoContext }  from "../../context/CartInfoContext";

const Cart = () => {
    const {cartInfo}  = useContext(CartInfoContext);
    return <div>
        <ul>
            {cartInfo.map( item => {
                return (
                    <li key={item.id}>
                        {item.name} - Qty. {item.qty} - Price {item.price}
                    </li>
                )
            }
            )}
        </ul>
    </div>
}

export default Cart;