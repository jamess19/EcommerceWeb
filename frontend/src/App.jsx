
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
function App() {
  return (
    <div className='min-h-screen bg-base-200 transition-colors duration-300'> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products/:id" element={<ProductPage/>}/>
    </Routes>
    </div>
  )
}

export default App
