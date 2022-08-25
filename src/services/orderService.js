import { collection, addDoc } from "firebase/firestore";
import { backend } from "./firebase";

const collectionName = 'orders';
const collectionRef = collection(backend, collectionName);
    
export const saveOrder = async (order) => {
    const orderCreated = await addDoc(collectionRef, order);
    console.log(orderCreated);

}