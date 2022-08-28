import { collection, writeBatch , doc} from "firebase/firestore";
import { backend } from "./firebase";
import { getProductFromList } from "./productService";

const collectionName = 'orders';
const collectionRef = collection(backend, collectionName);
    
export const saveOrder = async (order) => {
    const stockProduct  = await getProductFromList(order.items.map(cartItems => cartItems.id));
    const outOfStock = [];
    const orderBatch = writeBatch(backend);

    stockProduct.forEach(prod => {
        const item = order.items.find(item => item.id === prod.id);
        
        const stockAfterOrder = prod.data().stock - item.qty;
        if ( stockAfterOrder < 0 ) {
            outOfStock.push(item);
        } else {
            orderBatch.update(prod.ref, { stock: stockAfterOrder});
        }
    })

    if (outOfStock.length === 0) {
        const newOrder = doc(collectionRef);
        orderBatch.set(newOrder, order);
        orderBatch.commit();

        return newOrder.id;
    } else { 
        const errorMessage = "Hay productos fuera de stock: " + String(outOfStock);
        throw errorMessage ;
    }

}