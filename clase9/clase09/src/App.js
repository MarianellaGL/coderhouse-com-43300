import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import CategoryProduct from "./Components/CategoryProducts";
import ProductDetail from "./Components/ProductDetail";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoryProduct />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route exact path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
