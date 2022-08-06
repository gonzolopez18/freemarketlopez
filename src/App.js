import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const handleOnAdd = (qty) => {
    console.log(`Se agregarán ${qty} unidades del producto al carro`);
  }

  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer message="Bienvenidos" />} /> 
          <Route path="/category/:category" element={<ItemListContainer message="Listado por categoría" />} /> 
          <Route path='/item/:productId' element={<ItemDetailContainer message="Detalle" onAddHandler={handleOnAdd} />} />
          <Route path='*' element={<h1>Page not Found</h1>} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
