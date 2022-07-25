import { useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { getCatalogFromApi } from '../../mockedApi';



const ItemListContainer = ( {message}) => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
            getCatalogFromApi().then((catalog) =>
                setCatalog(catalog))
        }
    , []);

    return (
            <div className="h-100 p-5 text-bg-light rounded-3" >
                <div className="row" style={{ margin: '50px'}} >
                    <h1> {message}</h1>
                </div>
                
                
                <ItemList products={catalog} ></ItemList>
         </div> 
       );
    }

export default ItemListContainer
