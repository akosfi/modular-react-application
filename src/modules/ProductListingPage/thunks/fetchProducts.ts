import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "productListingPage/fetchProducts",
  async () => {
    // const response = await fetch(`https://reqres.in/api/users/${userId}`);
    // return (await response.json()) as Returned;
  }
);

export default fetchProducts;
