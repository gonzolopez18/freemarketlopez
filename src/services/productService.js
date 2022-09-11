
import { getDocs, collection, query, where, doc, getDoc, documentId } from 'firebase/firestore'
import { backend } from './firebase'

const collectionName = 'products';
const collectionRef = collection(backend, collectionName);

export const GetCatalogFromApi = async (category) => { 
    const collectionRef = !category ? 
        collection( backend, collectionName) 
        : query(collection(backend, collectionName), where('category', '==', category)) 
    const ppp = await getDocs(collectionRef);
    const products = ppp.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data};
            });
            return products;
}

export const GetCatalogFromApiById = async (id) => { 
    const response = await getDoc(doc(backend, collectionName, id));
    const data = response.data();
    const product = {id: response.id, ...data};
    return product;
}

export const getProductFromList = async (ids) => { 
    const products = await getDocs(query(collectionRef, where(documentId(), 'in', ids)));
    return products.docs;
}