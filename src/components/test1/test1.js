import { useState, useEffect} from "react";
import { getCatalogFromApi } from "../../mockedApi";


const Test1 = () => { 
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getData = async () => {
        var products
        fetch('http://localhost:8080/api/gambling')
        .then(response => response.json())
        .then(json => {
            products = json;
            console.log(json);
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            
        })
        return products;
    }

    const showData = async () =>{
        setIsLoading(true);
            const getCatalog = async () => {
                const result = await getData();
                setProducts(result);
                
            };
            await getCatalog().catch(console.error);
           setIsLoading(false);
    }
    // useEffect(() => {
    //     setIsLoading(true);
    //     const getCatalog = async () => {
    //         const result = await getData();
    //         setProducts(result);
            
    //     };
    //     getCatalog().catch(console.error);
     //   setIsLoading(false);
        // fetch('http://localhost:8080/api/gambling')
        // .then(response => response.json())
        // .then(json => {
        //     setProducts(json);
        //     console.log(json);
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setIsLoading(false);
        // })
        // console.log('inicio');
        // getCatalogFromApi().then( response =>
        //     setProducts(response))
        // .catch(error => {
        //     console.log(error);
        // }).finally(() => {
        //     console.log('finally');
        //     setIsLoading(false)
        // });
    // }, [])

    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div><button onClick={() => showData()}> Probar</button>
            terminó
        {products.map(prod => {
            return (
                <div key={prod.id}>
                    <p>{prod.name}</p>
                </div>
            )
        })}
    </div>
        );
}

export default Test1;