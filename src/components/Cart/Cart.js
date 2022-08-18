import React from 'react';
import { useContext } from "react";
import { CartInfoContext }  from "../../context/CartInfoContext";
import ItemDetails from '../ItemDetails/ItemDetails';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartInfo}  = useContext(CartInfoContext);

return <div>

        <section class="h-100" style={{backgroundColor: "#eee"}}>
            <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

                <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                    <p class="mb-0"><Link to="/" class="text-muted">Seguir comprando...</Link></p>
                </div>
                </div>
                {cartInfo.map( item => {
                    return (
                        <div key={item.id} class="card rounded-3 mb-4">
                            <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                        <img src={item.img} class="img-fluid rounded-3" alt={item.name} />
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                        <p class="lead fw-normal mb-2">{item.name}</p>
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-xl-2 d-flex">
                                        <h5 class="mb-0">{item.qty} un.</h5>
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-xl-2 d-flex">
                                        <h5 class="mb-0">${item.price} </h5>
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                        <h5 class="mb-0">${item.qty * item.price}</h5>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div class="card mb-4">
                    <div class="card-body p-4 ">
                        <div class="row d-flex justify-content-between align-items-right">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 d-flex">
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 d-flex">
                                <h5>Total </h5>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">$4444</h5>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                <div class="card-body">
                    <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>

    </div>
}

export default Cart;