import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Form from './components/Form/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './components/Context/cartContext';
import CartView from './components/CartWidget/CartView';
import FormCheckout from './components/Form/FormCheckout';

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
                  <Route exact path="/form" element={<FormCheckout />} />
                  <Route path='*' element={<Navigate to='/'/>} />
              </Routes>
          </Rutas>

        </CartContextProvider>
        
        </div>
  );
}

export default App;
