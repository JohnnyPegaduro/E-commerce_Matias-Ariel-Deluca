import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';




function App() {
  return (
    <>
      
      <NavBar />
      
      <ItemListContainer Saludo={"Bienvenidos"}/>

      <ItemCount/>

    </>
  );
}

export default App;
