import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  

  return (
    <>
      
      <NavBar />
      
      <ItemListContainer/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemDetailConatainer/>

    </>
  );
}

export default App;
