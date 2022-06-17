import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart/Cart';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path='/detalle/:id' element={<ItemDetailConatainer />} />
          <Route exact path='/cart' element={<Cart />} />

          <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
