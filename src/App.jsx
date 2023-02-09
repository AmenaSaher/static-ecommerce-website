import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productlist' element={<ProductList/>}/>  
      <Route path='/product' element={<Product/>}/>  

    </Routes>
    </BrowserRouter>
  )
}
