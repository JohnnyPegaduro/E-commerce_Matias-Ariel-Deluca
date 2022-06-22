import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Cart  from './components/Cart/Cart';
import { CartContextProvider } from './components/Context/cartContext';

function App() {

  return (
      <CartContextProvider>
        <div>

          <Rutas>
            <NavBar />
              <Routes>
                  <Route index path='/' element={<ItemListContainer />} />
                  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
                  <Route exact path='/detalle/:id' element={<ItemDetailConatainer />} />
                  <Route exact path='/cart' element={<Cart />} />

                  <Route path='*' element={<Navigate to='/'/>} />
              </Routes>
          </Rutas>

        </div>
      </CartContextProvider>
  );
}

export default App;
