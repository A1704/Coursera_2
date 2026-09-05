import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar.jsx'
import { addItem } from '../redux/CartSlice.jsx'

const plantImage = (label, bg = '1f4a32') =>
  `https://placehold.co/300x220/${bg}/f5f2e8?text=${encodeURIComponent(label)}`

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 18.0 },
      { name: 'Spider Plant', cost: 14.0 },
      { name: 'Peace Lily', cost: 22.0 },
      { name: 'Boston Fern', cost: 16.0 },
      { name: 'Rubber Plant', cost: 24.0 },
      { name: 'Aloe Vera', cost: 12.0 },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: 15.0 },
      { name: 'Jasmine', cost: 19.0 },
      { name: 'Rosemary', cost: 11.0 },
      { name: 'Mint', cost: 9.0 },
      { name: 'Lemon Balm', cost: 10.0 },
      { name: 'Basil', cost: 8.0 },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', cost: 20.0 },
      { name: 'Pothos', cost: 13.0 },
      { name: 'Cast Iron Plant', cost: 21.0 },
      { name: 'Succulent Mix', cost: 15.0 },
      { name: 'Ponytail Palm', cost: 26.0 },
      { name: 'Dracaena', cost: 17.0 },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const [addedItems, setAddedItems] = useState({})

  const isInCart = (name) =>
    Boolean(addedItems[name]) || cartItems.some((item) => item.name === name)

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: plant.image,
        cost: plant.cost,
      }),
    )
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }))
  }

  return (
    <div className="product-list-page">
      <Navbar />
      <div className="product-list-header">
        <h2>Our Plants</h2>
      </div>

      {plantCategories.map((group) => (
        <div className="product-category" key={group.category}>
          <h3>{group.category}</h3>
          <div className="product-grid">
            {group.plants.map((plant) => {
              const image = plantImage(plant.name)
              const added = isInCart(plant.name)
              return (
                <div className="product-card" key={plant.name}>
                  <img src={image} alt={plant.name} />
                  <div className="product-card-body">
                    <span className="product-card-name">{plant.name}</span>
                    <span className="product-card-price">
                      ${plant.cost.toFixed(2)}
                    </span>
                    <button
                      className="add-to-cart-btn"
                      disabled={added}
                      onClick={() => handleAddToCart({ ...plant, image })}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
