import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const handleOnAdd = (qty) => {
    console.log(`se agregarán ${qty} unidades del producto al carro`);
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
          <ItemListContainer message="Bienvenidos" />
          <ItemDetailContainer />
          <Counter stock={10} onAdd={handleOnAdd}></Counter>
      </div>
    </div>
  );
}

export default App;
