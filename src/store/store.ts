import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "modules/products";
import { cartReducer } from "modules/cart";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkApi = {
  dispatch: AppDispatch;
  state: RootState;
};
