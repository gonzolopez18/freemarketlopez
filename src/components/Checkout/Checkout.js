import { useContext } from "react";
import { CartInfoContext } from "../../context/CartInfoContext";
import { saveOrder} from "../../services/orderService";

const Checkout = () => {
    const {cartInfo, getTotalAmount}  = useContext(CartInfoContext);
    const items = cartInfo;


    const order = { 
            buyer: { name: "Gonzalo", sureName: "Lopez", email: "gonzolopez@outlook.com"},
            items,
            total: getTotalAmount()
    }

    const save = async () => { 
        console.log(order);
        const result = await saveOrder(order);
        console.log(result);
    }

    return <div>
            <button onClick={() => save(order)}>Guardar</button>
        </div>
}

export default Checkout;