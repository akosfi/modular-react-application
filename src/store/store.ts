import { configureStore } from "@reduxjs/toolkit";
import productListingPageReducer from "modules/ProductListingPage/redux/slice";
import cartReducer from "modules/Cart/redux/slice";

export const store = configureStore({
  reducer: {
    productListingPage: productListingPageReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
