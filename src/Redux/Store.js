import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import authReducer from "./Slices/AuthSlice";

// === Load data from localStorage ===
const loadFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    const savedAuth = localStorage.getItem("auth");

    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
      auth: savedAuth ? JSON.parse(savedAuth) : false,
    };
  } 
  catch (error) {
    console.error("Error loading data from localStorage", error);
    return {
      cart: [],
      auth: false,
    };
  }
};

// === Save data to localStorage ===
const saveToLocalStorage = (state) => {
  try {
    const cartData = JSON.stringify(state.cart);
    const authData = JSON.stringify(state.auth);
    localStorage.setItem("cart", cartData);
    localStorage.setItem("auth", authData);
  } 
  catch (error) {
    console.error("Error saving data to localStorage", error);
  }
};

// === Configure the store ===
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

// === Auto-save on any state change ===
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
