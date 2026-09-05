import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import './App.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      <div className="landing-page">
        <div className="landing-content">
          <p className="landing-eyebrow">Houseplants, grown with care</p>
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-description">
            Bring a little wilderness indoors. Browse air-purifying,
            fragrant, and low-maintenance plants raised in our own
            greenhouses and delivered straight to your door.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigate('/products')}
          >
            Get Started
          </button>
        </div>
      </div>
      <AboutUs />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
