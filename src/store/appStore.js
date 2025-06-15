import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
