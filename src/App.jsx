import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart/Cart';

function App() {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailConatainer />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </BrowserRouter>
  );
}

export default App;
