import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import Test1 from './components/test1/test1';


function App() {

  const handleOnAdd = (qty) => {
    console.log(`se agregarán ${qty} unidades del producto al carro`);
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Bienvenidos" />
      <Counter stock={10} onAdd={handleOnAdd}></Counter>
    </div>
  );
}

export default App;
