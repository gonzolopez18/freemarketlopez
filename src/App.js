import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Bienvenidos" />
    </div>
  );
}

export default App;
