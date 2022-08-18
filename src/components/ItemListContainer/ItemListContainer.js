import { useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { getCatalogFromApi, getCatalogFromApiByCategory } from '../../mockedApi';
import { useParams } from 'react-router-dom';


const ItemListContainer = ( {message}) => {
    const [catalog, setCatalog] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getCatalog = category ? getCatalogFromApiByCategory : getCatalogFromApi;
        getCatalog(category).then((catalog) =>
                setCatalog(catalog))
        }
    , [category]);

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
