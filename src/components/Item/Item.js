import './item.css';
import { Link } from 'react-router-dom';


const Item = ( {product }) => {
    return (
        <div className="row">
            <div className="card" style={{ width: '18rem'}}>
                    <div className="image">
                        <img src={product.img} className="card-img-top" alt={product.description} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver más...</Link>
                    </div>
            </div>    
        </div> 
    );
}

export default Item