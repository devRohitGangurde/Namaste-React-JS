import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
        const itemId = action.payload;
        const item = state.items.find(i => i.id === itemId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item && item.quantity === 1) {
          state.items = state.items.filter(i => i.id !== itemId);
        }
    },
  },
});

export const { addItem, removeItem, clearCart ,increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
