import { Routes, Route } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/checkout/CheckoutPages';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
        .then((response) => {
            setCart(response.data);
        }); 
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} /> 
      {/*Instead of path="/" we can use the prop index*/}
      <Route path='checkout' element={<CheckOutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
