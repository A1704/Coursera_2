import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { name, image, cost, quantity }
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload
      const existingItem = state.items.find((item) => item.name === name)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const itemToUpdate = state.items.find((item) => item.name === name)

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },
    incrementQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.name === action.payload)
      if (itemToUpdate) {
        itemToUpdate.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.name === action.payload)
      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.name !== action.payload)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = CartSlice.actions

export default CartSlice.reducer
