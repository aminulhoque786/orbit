import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.CartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findProduct !== -1) {
        state.CartItem[findProduct].qun += 1;
        localStorage.setItem("cart", JSON.stringify(state.CartItem));
      } else {
        state.CartItem = [...state.CartItem, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.CartItem));
      }
    },
    productIncrement: (state, action) => {
      const productId = action.payload;
      const product = state.CartItem.find((item) => item.id === productId);
      if (product) {
        product.qun += 1;
        localStorage.setItem("cart", JSON.stringify(state.CartItem));
      }
    },
    productDecrement: (state, action) => {
      const productId = action.payload;
      const product = state.CartItem.find((item) => item.id === productId);
      if (product) {
        if (product.qun > 1) {
          product.qun -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(state.CartItem));
      }
    },
  },
});

export const { addToCart, productIncrement, productDecrement } =
  productSlice.actions;

export default productSlice.reducer;
