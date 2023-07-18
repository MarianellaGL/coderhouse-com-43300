import './style.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import ProductList from './components/Products/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoryProductList from './components/Categories/CategoryProductList'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/:categoryId" element={<CategoryProductList />} />
        </Routes>



      </Router>
    </>
  )
}

export default App
