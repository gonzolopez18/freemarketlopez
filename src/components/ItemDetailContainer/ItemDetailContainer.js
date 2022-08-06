import { useEffect, useState } from "react";
import { getCatalogFromApiById } from "../../mockedApi";
import ItemDetails from "../ItemDetails/ItemDetails";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( {message, onAddHandler }) => {
    const [product, setProduct] = useState([]);
    const { productId} = useParams();
 
    useEffect(() => {
        getCatalogFromApiById(productId)
            .then( producto => { 
                setProduct(producto);});
    }, [productId]);

   return (
        <ItemDetails product={ product } stock={ 5} onAddHandler={onAddHandler}/>
    );
}

export default ItemDetailContainer;
