import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { Product } from "modules/ProductListingPage/types";
import categoryFilterReducer from "modules/ProductListingPage/components/CategoryFilter/slice";

export type ProductListingPageState = {
  products: Product[];
};

const initialState: ProductListingPageState = {
  products: [],
};

const productListingPageSlice = createSlice({
  name: "productListingPage",
  initialState,
  reducers: {
    loadProducts: (state: ProductListingPageState) => state,
  },
});

export const { actions: productListingPageActions } = productListingPageSlice;

export default combineReducers({
  rootState: productListingPageSlice.reducer,
  categoryFilter: categoryFilterReducer,
});
