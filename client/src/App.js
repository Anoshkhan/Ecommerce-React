import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList"
function App() {
  return (
    
    <Router>
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product-list" element={<ProductList/>} />
    
    </Routes>
    </Router>
  );
}

export default App;
