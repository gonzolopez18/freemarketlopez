
const Item = ( {product }) => {
    return ( 
        <div className="card" style={{ width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.google.com" className="btn btn-primary">Ver más...</a>
            </div>
        </div>
    );
}

export default Item