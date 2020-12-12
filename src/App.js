import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Component
import Header from './component/Header'
import Footer from './component/Footer'

//Pages
import HomePage from './component/HomePage'
import CartPage from './component/Cart/CartPage'
import ProductsPage from './component/Products/ProductsPage'
import NotFoundPage from './component/NotFoundPage'

//styles
import './styles.css'

//State Provider
import { CartProvider } from './context/Cart'

export default function App() {
    return (
        <Router>
            <CartProvider>
                <Header />
                <Routes>
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </CartProvider>
        </Router>
    )
}
