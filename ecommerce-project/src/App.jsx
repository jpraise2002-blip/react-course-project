import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/checkout/CheckoutPages';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
      {/*Instead of path="/" we can use the prop index instead*/}
      <Route path='checkout' element={<CheckOutPage />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
