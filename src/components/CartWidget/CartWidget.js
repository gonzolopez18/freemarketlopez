import './CartWidget.css';
import { useContext } from 'react';
import { CartInfoContext } from '../../context/CartInfoContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { getCartInfoCount } = useContext(CartInfoContext);

    const quantity = getCartInfoCount();


    return (
        <div className="cart-widget">
            <img src='/images/cart.svg' alt='Shopping Cart' /> 
            { quantity === 0 ? null : <Link to='/cart'>{quantity} items </Link> }
        </div>
    );
}

export default CartWidget;