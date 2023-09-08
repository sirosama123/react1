// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Store cart items as an array of objects
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already in the cart
      const { id, name, price,image,quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ id, name, price, quantity,image});
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
