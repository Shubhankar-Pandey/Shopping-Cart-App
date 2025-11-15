import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    add(state, action) {
      const item = action.payload;
      const existing = state.find((p) => p.id === item.id);

      if (!existing) {
        state.push({ ...item, quantity: 1 });
      }
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    increase(state, action) {
      const id = action.payload;
      const existing = state.find((p) => p.id === id);

      if (existing) {
        existing.quantity += 1;
      }
    },

    decrease(state, action) {
      const id = action.payload;
      const existing = state.find((p) => p.id === id);

      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== id);
      }
    },

    clearCart(state) {
      state.length = 0;
    }
  },
});

export const { add, remove, clearCart, increase, decrease } = CartSlice.actions;
export default CartSlice.reducer;
