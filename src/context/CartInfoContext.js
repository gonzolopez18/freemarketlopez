import { createContext , useState } from 'react';

export const CartInfoContext = createContext();

export const CartInfoContextProvider = ( {children }) => {
    const [cartInfo, setCartInfo] = useState([]);
  
    const addToCartInfo = (product) => { 
      if (isInCartInfo(product.id)) {
        const newCartInfo = cartInfo.filter(prod => prod.id !== product.id);
        setCartInfo([...newCartInfo, product]);
      } else {
        setCartInfo([...cartInfo, product]);
      }
    }
  
    const isInCartInfo = (productId) => {
      const itIs = cartInfo.some( prod => prod.id === productId);
      return itIs
    }

    const getCartInfoCount = () => {
      let count = 0;
      cartInfo.forEach(
        prod => {count += prod.qty;}
      )
      return count;
    }

    const removeFromCartInfo = (productId) => {
      const newCartInfo = cartInfo.filter(prod => prod.id !== productId);
      setCartInfo(newCartInfo);
      
    }

    const clearCartInfo = () => { setCartInfo([]); }

    const getProductQuantity = (productId) => {
      console.log(productId);
      const product = cartInfo.find(prod => prod.id === productId);
      return product?.qty;
    }

    const getTotalAmount = () => {
      let total = 0

      cartInfo.forEach(prod => {
      total += (prod.qty * prod.price)
      })
      return total
  }


    return (
        <CartInfoContext.Provider 
          value={{ cartInfo, addToCartInfo, getCartInfoCount, removeFromCartInfo, 
                  clearCartInfo, getProductQuantity, getTotalAmount}}> 
            {children}
         </CartInfoContext.Provider>
    )
    };

export default CartInfoContext;