import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { Product } from "modules/products/ProductListingPage/types";
import categoryFilterReducer from "modules/products/ProductListingPage/components/CategoryFilter/redux/slice";

export const SLICE_NAME = "productListingPage";

export type ProductListingPageState = {
  products: Product[];
};

const initialState: ProductListingPageState = {
  products: [],
};

const productListingPageSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    loadProducts: (state: ProductListingPageState) => state,
  },
});

export const { actions: productListingPageSliceActions } =
  productListingPageSlice;

export default combineReducers({
  rootState: productListingPageSlice.reducer,
  categoryFilter: categoryFilterReducer,
});
