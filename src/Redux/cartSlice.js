import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count = (state.items[existingItemIndex].count || 1) + 1;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }
      localStorage.setItem('cartItems',JSON.stringify(state.items));

    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems',JSON.stringify(state.items))
    },
    removeSingleFromCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      state.items[existingItemIndex].count = (state.items[existingItemIndex].count || 1) - 1;

      localStorage.setItem('cartItems',JSON.stringify(state.items));

      
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeSingleFromCart } = cartSlice.actions;
export default cartSlice.reducer;
