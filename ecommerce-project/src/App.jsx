import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckoutPages';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
      {/*Instead of path="/" we can use the prop index instead*/}
      <Route path='checkout' element={<CheckOutPage />} />
    </Routes>
  )
}

export default App
