import { useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { GetCatalogFromApi } from '../../services/productService';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( {message}) => {
    const [catalog, setCatalog] = useState([]);
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect( () => {
        const getCatalog = async () => {
            const result = await GetCatalogFromApi(category);
            setCatalog(result);
        };
        getCatalog();
        setIsLoading(false);
        }
    , [category]);

    return (
            <div className="h-100 p-5 text-bg-light rounded-3" >
                <div className="row" style={{ margin: '50px'}} >
                    <h1> {message}</h1>
                </div>
                
            {isLoading ? <h1>Cargando...</h1> : <ItemList products={catalog} ></ItemList>}
         </div> 
       );
    }

export default ItemListContainer
