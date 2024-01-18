
import Home from './page/Home/Home'
import Navigation from './page/Home/Navigation';
import Register from './page/Register'
import Login from './page/Login'
import Products from './page/Products'
import Cart from './page/Carts'
import Checkout from './page/Checkout'
import ListProducts from './page/ListProducts'
import Admin from './Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './page/Search';
import ManageUser from './page/ManageUser';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}>

          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="collection/:pathName" element={<ListProducts />} />
          <Route path="search" element={<Search />} />
          <Route path="manageUser" element={<ManageUser />} />

        </Route>

    
        <Route path="checkout" element={<Checkout />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
