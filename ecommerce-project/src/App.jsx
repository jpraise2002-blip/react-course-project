import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
      {/*Instead of path="/" we can use the prop index instead*/}
      <Route path='checkout' element={<div>Test Checkout Page</div>} />
    </Routes>
  )
}

export default App
