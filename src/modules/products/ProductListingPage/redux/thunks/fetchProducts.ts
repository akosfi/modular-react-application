import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  `productListingPage/fetchProducts`,
  async () => {
    const response = await fetch("/api/products");
    return await response.json();
  }
);

export default fetchProducts;
