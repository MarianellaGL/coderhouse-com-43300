
import Categories from './Components/Categories/Categories'
import CateogyrProductList from './Components/Categories/CategoryProductList';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/Products/ProductList';
import CartProvider from './Context/CartContext';
import ThemeContextProvider from './Context/ThemeContext';
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import withBlackBackground from "./Hocs/withBlackBackground";
import Cart from './Components/Checkout/Cart';


function App() {
  const HomeWithBackground = withBlackBackground(Home);
  const ProductsWithBackground = withBlackBackground(ProductList);
  const CategoriesWithBackground = withBlackBackground(Categories);
  const CategoriesProductListWithBackground = withBlackBackground(CateogyrProductList)
  const CartWithBackground = withBlackBackground(Cart);


  return (
    <>
      <ThemeContextProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomeWithBackground />} />
              <Route exact path="/products" element={<ProductsWithBackground />} />
              <Route exact path="/categories" element={<CategoriesWithBackground />} />
              <Route path="/categories/:categoryId" element={<CategoriesProductListWithBackground />} />
              <Route exact path='/cart' element={<CartWithBackground />} />
            </Routes>
          </Router>
        </CartProvider>
      </ThemeContextProvider>

    </>
  )
}

export default App;
