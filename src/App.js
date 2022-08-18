import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartInfoContextProvider } from './context/CartInfoContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App container">
      <CartInfoContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer message="Bienvenidos" />} /> 
            <Route path="/category/:category" element={<ItemListContainer message="Listado por categoría" />} /> 
            <Route path='/item/:productId' element={<ItemDetailContainer message="Detalle" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>Page not Found</h1>} />
          </Routes>  
        </BrowserRouter>
      </CartInfoContextProvider>
    </div>
  );
}

export default App;
