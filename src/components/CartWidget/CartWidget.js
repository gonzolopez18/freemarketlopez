import React from 'react';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src='images/cart.svg' alt='Shopping Cart' /> 
            10 items
        </div>
    );
}

export default CartWidget;