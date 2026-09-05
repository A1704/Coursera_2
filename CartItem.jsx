import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar.jsx'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/CartSlice.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const totalCartAmount = cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0,
  )

  const handleIncrement = (name) => dispatch(incrementQuantity(name))
  const handleDecrement = (name) => dispatch(decrementQuantity(name))
  const handleDelete = (name) => dispatch(removeItem(name))
  const handleCheckout = () => {
    alert('Checkout coming soon! We are still setting up payments.')
  }

  return (
    <div className="cart-page">
      <Navbar />

      <h2 className="cart-total">
        Total: ${totalCartAmount.toFixed(2)}
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">
          Your cart is empty. Head back to the plant shop to add something
          green.
        </p>
      ) : (
        cartItems.map((item) => {
          const subtotal = item.cost * item.quantity
          return (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  ${item.cost.toFixed(2)} each
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecrement(item.name)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncrement(item.name)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-subtotal">${subtotal.toFixed(2)}</div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.name)}
              >
                Delete
              </button>
            </div>
          )
        })
      )}

      <div className="cart-actions">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout (Coming Soon)
        </button>
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default CartItem
