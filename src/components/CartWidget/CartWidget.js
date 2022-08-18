import './CartWidget.css';
import { useContext } from 'react';
import { CartInfoContext } from '../../context/CartInfoContext';


const CartWidget = () => {

    const { getCartInfoCount } = useContext(CartInfoContext);

    const quantity = getCartInfoCount();

    return (
        <div className="cart-widget">
            <img src='/images/cart.svg' alt='Shopping Cart' /> 
            {quantity} items
        </div>
    );
}

export default CartWidget;