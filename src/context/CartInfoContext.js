import { createContext , useState } from "react";

export const CartInfoContext = createContext();

export const CartInfoContextProvider = ( {children }) => {
    const [cartInfo, setCartInfo] = useState([]);
  
    const addToCartInfo = (product) => { 
      console.log(product.id);
      if (isInCartInfo(product.id)) 
        return;      
      setCartInfo([...cartInfo, product]);
      console.log(cartInfo)
    }
  
    const isInCartInfo = (productId) => {
      const itIs = cartInfo.some( prod => prod.id === productId);
      console.log(itIs);
        return itIs
    }

    const getCartInfoCount = () => {
      let count = 0;
      cartInfo.forEach(
        prod => {count += prod.qty;}
      )
      return count;
    }
  

    return (
        <CartInfoContext.Provider value={{ cartInfo, addToCartInfo, getCartInfoCount}}> 
            {children}
         </CartInfoContext.Provider>
    )
    };

export default CartInfoContext;