

const ItemDetails = ( {id, name, description, price}) => {
    return (
        <div>
            <h1>Detalle de producto {name}</h1>
            <p>{description}</p>
        </div>
    );
}

export default ItemDetails;