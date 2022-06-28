import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './components/Context/cartContext';
import CartView from './components/CartWidget/CartView';

function App() {

  return (
    <div>

        <CartContextProvider>

          <Rutas>
            <NavBar />
              <Routes>
                  <Route index path='/' element={<ItemListContainer />} />
                  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
                  <Route exact path='/detalle/:productoId' element={<ItemDetailConatainer />} />
                  <Route exact path='/cart' element={<CartView />} />

                  <Route path='*' element={<Navigate to='/'/>} />
              </Routes>
          </Rutas>

        </CartContextProvider>
        
        </div>
  );
}

export default App;
