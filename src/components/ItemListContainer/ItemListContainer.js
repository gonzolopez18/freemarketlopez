import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ( {message}) => {
    return (
            <div className="h-100 p-5 text-bg-dark rounded-3" >
                <h1> {message}</h1>
            </div> 
        );
    }

export default ItemListContainer
