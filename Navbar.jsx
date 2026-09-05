import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Plants</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon-link">
            🛒 Cart
            <span className="cart-count-badge">{totalItems}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
