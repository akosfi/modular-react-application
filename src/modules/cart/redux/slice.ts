import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { CartProduct } from "modules/cart/types";

export const SLICE_NAME = "cart";

export type CartState = {
  cartProducts: CartProduct[];
};

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProduct: (state: CartState) => state,
  },
});

export const { actions: cartSliceActions } = cartSlice;

export default combineReducers({
  rootState: cartSlice.reducer,
});
