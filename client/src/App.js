import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList"
import Register from "./pages/Register";
function App() {
  return (
    
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product-list" element={<ProductList/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart" element={<Cart/>} />
    
    
    </Routes>
    </Router>
  );
}

export default App;
