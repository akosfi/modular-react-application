import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { CartProduct } from "modules/Cart/types";

export type CartState = {
  cartProducts: CartProduct[];
};

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartState) => state,
  },
});

export const { actions: cartActions } = cartSlice;

export default combineReducers({
  rootState: cartSlice.reducer,
});
