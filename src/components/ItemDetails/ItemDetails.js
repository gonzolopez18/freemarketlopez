import Counter from "../Counter/Counter";
import './ItemDetails.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetails = ( {product, stock }) => {
    const [quantity, setQuantity ] = useState(0);
    const {id, name, description, price, img} = product;

    const handleOnAdd = (qty) => {
        console.log(`se agregarán ${qty} de ${name} al carrito`);
        setQuantity(qty);
    }
    
    return (
        <div className="container  pt-5">
            <div className="row">
                <div className="col-sm-1">
                    
                </div>
                <div className="col-md-6">
                    <img src={img} alt={name} className="img-fluid"/>
                </div>
                <div className="col-md-5 border border-light" >
                    <div className="details">
                        <h3 >Detalle de producto</h3>
                        <h1>{name}</h1>
                        <p >{description}</p>
                        <div className="container my-4">
                            <div className="row dark" >
                                <div className="col-sm-2 border border-dark" >
                                    <img src={img} alt={name} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-center m-5">${price}</h3>
                        {quantity === 0 ? (
                                <Counter stock={ stock } onAddHandler={handleOnAdd}></Counter>
                            ) : (
                                <Link to='/cart'>Finalizar combra</Link>
                            ) 
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;