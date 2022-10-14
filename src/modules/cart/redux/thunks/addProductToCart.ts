import { createAsyncThunk } from "@reduxjs/toolkit";

const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async () => {}
);

export default addProductToCart;
