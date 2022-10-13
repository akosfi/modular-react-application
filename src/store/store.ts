import { configureStore } from "@reduxjs/toolkit";
import ProductListingPageReducer from "modules/ProductListingPage/slice";

export const store = configureStore({
  reducer: {
    productListingPage: ProductListingPageReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
