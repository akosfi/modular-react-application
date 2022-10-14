import { combineReducers, createSlice } from "@reduxjs/toolkit";

import categoryFilterReducer from "modules/products/ProductListingPage/components/CategoryFilter/redux/slice";
import { Product } from "modules/products/types";
import fetchProducts from "modules/products/ProductListingPage/redux/thunks/fetchProducts";

export type ProductListingPageState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductListingPageState = {
  products: [],
  isLoading: false,
  error: null,
};

const productListingPageSlice = createSlice({
  name: "productListingPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (_state, _action) => initialState);
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = "Failed to load products.";
      state.isLoading = false;
    });
  },
});

export const { actions: productListingPageSliceActions } =
  productListingPageSlice;

export default combineReducers({
  rootState: productListingPageSlice.reducer,
  categoryFilter: categoryFilterReducer,
});
