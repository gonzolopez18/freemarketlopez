import React from 'react';
import './Cart.css';
import { useContext } from "react";
import { CartInfoContext }  from "../../context/CartInfoContext";
import ItemDetails from '../ItemDetails/ItemDetails';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartInfo, getTotalAmount, getCartInfoCount, removeFromCartInfo, clearCartInfo}  = useContext(CartInfoContext);
    const TotalAmount = getTotalAmount();
    const CartCount = getCartInfoCount();

    const removeItem = (id) => {
        removeFromCartInfo(id);
    };

    const clearAll = () => {
        clearCartInfo();
    };


if (CartCount === 0) {
    return (
        <section className="h-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                        <div>
                            <p className="mb-0"><Link to="/" className="text-muted">Seguir comprando...</Link></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="fw-normal mb-0 text-black">No hay productos en su carrito</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} else {
        return (
            <div className="cart-info">

                <section className="h-100" style={{backgroundColor: "#eee"}}>
                    <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                        <div>
                            <p className="mb-0"><Link to="/" className="text-muted">Seguir comprando...</Link></p>
                        </div>
                        </div>
                        {cartInfo.map( item => {
                            return (
                                <div key={item.id} className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src={item.img} className="img-fluid rounded-3" alt={item.name} />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">{item.name}</p>
                                            </div>
                                            <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                                                <h5 className="mb-0">{item.qty} un.</h5>
                                            </div>
                                            <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                                                <h5 className="mb-0">${item.price} </h5>
                                            </div>
                                            <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">${item.qty * item.price}</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button onClick={() => removeItem(item.id)}><img src='/images/trash.svg' alt='Shopping Cart' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="card mb-4">
                            <div className="card-body p-4 ">
                                <div className="row d-flex justify-content-between align-items-right">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                        <button onClick={() => clearCartInfo()}>Borrar todo</button>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                    </div>
                                    <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                                    </div>
                                    <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                                        <h5>Total </h5>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h5 className="mb-0">${TotalAmount}</h5>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                        <div className="card-body">
                            <Link to="/checkout" type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</Link>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                </section>

            </div>
        )
    }
}
export default Cart;