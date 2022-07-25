import Item from "../Item/Item";

const ItemList = ( {products}) => {
    return (
        <div className='container-fluid px-4 '>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                {products.map((product) => {
                    return (
                        <Item key={product.id} product={product} />
                    );
                })}
            </div>
        </div>
    );
}

export default ItemList;