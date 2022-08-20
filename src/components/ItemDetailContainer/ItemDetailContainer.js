import { useEffect, useState } from "react";
import { getCatalogFromApiById } from "../../mockedApi";
import ItemDetails from "../ItemDetails/ItemDetails";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( {message }) => {
    const [product, setProduct] = useState();
    const { productId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCatalogFromApiById(productId)
            .then( producto => { 
                setProduct(producto);
            }).finally( () => {
                setIsLoading(false);
            });    
    }, [productId]);

   return (
        <div>
            { isLoading ? <h1>Cargando...</h1> : <ItemDetails { ...product } />}
        </div>    
    );
}

export default ItemDetailContainer;
