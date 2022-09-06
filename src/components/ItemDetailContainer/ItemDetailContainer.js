import { useEffect, useState } from "react";
import { GetCatalogFromApiById } from '../../services/productService';
import ItemDetails from "../ItemDetails/ItemDetails";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( {message }) => {
    const [product, setProduct] = useState();
    const { productId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            const result = await GetCatalogFromApiById(productId);
            setProduct(result);
        };
        getProduct().catch(console.error);
        setIsLoading(false);
    }, [productId]);

   return (
        <div>
            { isLoading ? <h1>Cargando...</h1> : <ItemDetails { ...product } />}
        </div>    
    );
}

export default ItemDetailContainer;
