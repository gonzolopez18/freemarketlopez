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
    const [invalidData, setInvalidData] = useState(true);

    //const navigate = useNavigate()
    const order = { 
            buyer: { name, sureName, email},
            items, 
            total: getTotalAmount(),
            creationDate: new Date()
    }

    const save = async () => { 
        try {
            console.log(order);
            const result = await saveOrder(order);
            setOrderId(result)
            console.log("El id de la orden es:" + result);
            clearCartInfo();
             //setTimeout(() => {
            //    navigate('/')
            //}, 3000)
        }
        catch (error) {
            console.error(error);
            setOutOfStock(true);
        }
        finally {
            console.log(order);
        }
        
    }


    if (outOfStock) 
    { 
        return   (
           <div class="container">
                <div class="row">           
                    <div class="col-md-8 order-md-1">
                        <h4 class="mb-3">Out of Stock</h4>
                        <div class="mb-3">
                            <div>Some products are out of stock. Please, check your cart and try again.</div> 
                        </div>
                        <hr class="mb-4" />
                        <Link to="/" class="btn btn-primary btn-lg btn-block" >Go to Home...</Link>
                    </div>
                </div>
            </div>
        )
    }
    if (orderId !== "") {
        return   (
            <div class="container">
                 <div class="row">           
                     <div class="col-md-8 order-md-1">
                         <h4 class="mb-3">Order created</h4>
                         <div class="mb-3">
                             <div>Your order id is {orderId}. Thank you!</div> 
                         </div>
                         <hr class="mb-4" />
                         <Link to="/" class="btn btn-primary btn-lg btn-block">Continue shopping...</Link>
                     </div>
                 </div>
             </div>
         )   
    } 

        return (<div class="container">
            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3 sticky-top">
                    {cartInfo.map( item => {
                                    return (
                                        <li key={item.id} class="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 title={item.name} class="my-0">{item.name.substring(0, 20)}...</h6>
                                                <small class="text-muted">{item.qty} un. x ${item.price}</small>
                                            </div>
                                            <span class="text-muted">${item.qty * item.price}</span>
                                        </li>
                                    )
                    })}
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>${getTotalAmount()}</strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Personal Data</h4>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" onChange={({ target }) => setName(target.value)}  placeholder="" required=""/>
                                <div class="invalid-feedback"> Valid first name is required. </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" onChange={({ target }) => setSureName(target.value)} placeholder="" required=""/>
                                <div class="invalid-feedback"> Valid last name is required. </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" onChange={({ target }) => setEmail(target.value)} placeholder="you@example.com" required=""/>
                            <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                        </div>
                        <hr class="mb-4" />
                        <button class="btn btn-primary btn-lg btn-block" onClick={() => save(order)} >Order Now!</button>
                </div>
            </div>
        </div>
        )
}
export default Checkout;