import { useContext, useState } from "react";
import { CartInfoContext } from "../../context/CartInfoContext";
import { saveOrder } from "../../services/orderService";
import { Link } from 'react-router-dom'



const Checkout = () => {
    const {cartInfo, getTotalAmount, clearCartInfo}  = useContext(CartInfoContext);
    const items = cartInfo;
    const [name, setName] = useState("");
    const [sureName, setSureName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [outOfStock, setOutOfStock] = useState(false);

    //const navigate = useNavigate()
    const order = { 
            buyer: { name, sureName, email},
            items, 
            total: getTotalAmount(),
            creationDate: new Date()
    }

    const save = async (e) => { 
        e.preventDefault()
        try {
            const result = await saveOrder(order);
            setOrderId(result)
            clearCartInfo();
        }
        catch (error) {
            console.error(error);
            setOutOfStock(true);
        }
        finally {
        }
        
    }


    if (outOfStock) 
    { 
        return   (
           <div className="container">
                <div className="row">           
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Out of Stock</h4>
                        <div className="mb-3">
                            <div>Some products are out of stock. Please, check your cart and try again.</div> 
                        </div>
                        <hr className="mb-4" />
                        <Link to="/" className="btn btn-primary btn-lg btn-block" >Go to Home...</Link>
                    </div>
                </div>
            </div>
        )
    }
    if (orderId !== "") {
        return   (
            <div className="container">
                 <div className="row">           
                     <div className="col-md-8 order-md-1">
                         <h4 className="mb-3">Order created</h4>
                         <div className="mb-3">
                             <div>Your order id is {orderId}. Thank you!</div> 
                         </div>
                         <hr className="mb-4" />
                         <Link to="/" className="btn btn-primary btn-lg btn-block">Continue shopping...</Link>
                     </div>
                 </div>
             </div>
         )   
    } 

        return (<div className="container">
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3 sticky-top">
                    {cartInfo.map( item => {
                                    return (
                                        <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 title={item.name} className="my-0">{item.name.substring(0, 20)}...</h6>
                                                <small className="text-muted">{item.qty} un. x ${item.price}</small>
                                            </div>
                                            <span className="text-muted">${item.qty * item.price}</span>
                                        </li>
                                    )
                    })}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>${getTotalAmount()}</strong>
                        </li>
                    </ul>
                </div>
                <form onSubmit={save}>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Personal Data</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" onChange={({ target }) => setName(target.value)}  placeholder="" required="required"/>
                                    <div className="invalid-feedback"> Valid first name is required. </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" onChange={({ target }) => setSureName(target.value)} placeholder="" required="required"/>
                                    <div className="invalid-feedback"> Valid last name is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" onChange={({ target }) => setEmail(target.value)} placeholder="you@example.com" required="required"/>
                                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                            </div>
                            <hr className="mb-4" />
                            <input className="btn btn-primary btn-lg btn-block"  type="submit" value="Order Now!"/>
                    </div>
                </form>
            </div>
        </div>
        )
}
export default Checkout;