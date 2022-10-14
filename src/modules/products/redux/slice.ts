import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { productListingPageReducer } from "modules/products/ProductListingPage";

export type ProductListingPageState = {};

const initialState: ProductListingPageState = {};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { actions: productsSliceActions } = productsSlice;

export default combineReducers({
  rootState: productsSlice.reducer,
  productListingPage: productListingPageReducer,
});
