import { useEffect, useState } from "react";
import { getCatalogFromApiById } from "../../mockedApi";
import ItemDetails from "../ItemDetails/ItemDetails";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        getCatalogFromApiById('2')
            .then( product => {
                console.log(product);
                setProduct(product)})
            .catch((error) => { console.log(error); });
    }, [])

    return (
       <ItemDetails {...product } />
    );
}

export default ItemDetailContainer;
