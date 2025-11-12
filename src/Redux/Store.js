import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";

// Load cart data from localStorage (if available)
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } 
  catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

// Save cart data to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const cartData = JSON.stringify(state.cart);
    localStorage.setItem("cart", cartData);
  } 
  catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

// Initialize the store with persisted data
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCartFromLocalStorage(),
  },
});

// Subscribe to store updates — save cart whenever it changes
store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});
