import './style.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import ProductList from './components/Products/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoryProductList from './components/Categories/CategoryProductList'
import ContactForm from './components/Forms/ContactForm'
import { CartProvider } from './context/CartContext'
import ThemeContextProvider from './context/ThemeContext'
import withBlackBackground from './hocs/withBlackBackground'
import { useState } from 'react'
import CartForm from './components/Forms/CartForm'

function App() {
  const [active, setActive] = useState(false)

  const HomeWithBackground = withBlackBackground(Home)

  return (
    <ThemeContextProvider>
      <CartProvider>
        <Router>
          <Navbar active={active} setActive={setActive} />
          <Routes>
            <Route exact path="/" element={<HomeWithBackground />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/categories/:categoryId" element={<CategoryProductList />} />
            <Route exact path="/contact" element={<ContactForm />} />
            <Route exact path="/cart" element={<CartForm />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeContextProvider>

  )
}

export default App
