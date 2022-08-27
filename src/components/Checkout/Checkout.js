import { useContext } from "react";
import { CartInfoContext } from "../../context/CartInfoContext";
import { saveOrder, getOutOfStock } from "../../services/orderService";



const Checkout = () => {
    const {cartInfo, getTotalAmount}  = useContext(CartInfoContext);
    const items = cartInfo;


    const order = { 
            buyer: { name: "Gonzalo", sureName: "Lopez", email: "gonzolopez@outlook.com"},
            items,
            total: getTotalAmount(),
            creationDate: new Date()
    }

    const save = async () => { 
        try {
            console.log(order);
            const result = await saveOrder(order);
            console.log(result);

        }
        catch (error) {
            console.error(error);
        }
        finally {
            console.log(order);
        }
        
    }

    

    return <div>
            <button onClick={() => save(order)}>Guardar</button>
        </div>
}

export default Checkout;