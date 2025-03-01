
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import { useThemeStore } from "./store/useThemeStore.js"
import { Toaster } from "react-hot-toast"
function App() {
  const {theme} = useThemeStore()
  return (
    <div className='min-h-screen bg-base-200 transition-colors duration-300' data-theme={theme}> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
