import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Pages/SharedLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import ProductsRoute from './Pages/Products';
import Products from './components/Products/Products';
import SingleProduct from './components/Products/SingleProduct';
import Carts from './components/Carts/Carts';
import Checkout from './Pages/Checkout';
import { useAuth0 } from '@auth0/auth0-react';
const App = () => {
  const { user } = useAuth0();
  return (
    <BrowserRouter>
      <main className='md:text-lg'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path='/products/category/:category'
              element={<ProductsRoute />}
            />
            {/* <Route path='/products/category/all' element={<ProductsRoute />} /> */}

            <Route path='/products/search' element={<Products />} />
            <Route path='/products/:category/:id' element={<SingleProduct />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Carts />} />
            <Route path='/authorize' element={<h1>authorize</h1>} />
            <Route path='/checkout' element={user ? <Checkout /> : <Home />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
