
import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { backend } from './firebase'

const collectionName = 'products';

export const GetCatalogFromApi = async (category) => { 
    //console.log("entro");
    const collectionRef = !category ? 
        collection( backend, collectionName) 
        : query(collection(backend, collectionName), where('category', '==', category)) 
    //console.log(collectionRef);
    const ppp = await getDocs(collectionRef);
    const products = ppp.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data};
            });
            //console.log(products);
            return products;
}

export const GetCatalogFromApiById = async (id) => { 
   
    const response = await getDoc(doc(backend, collectionName, id));
    const data = response.data();
    const product = {id: doc.id, ...data};
    //console.log(products);
    return product;
}