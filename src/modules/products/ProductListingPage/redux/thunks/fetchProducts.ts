import { createAsyncThunk } from "@reduxjs/toolkit";

import { SLICE_NAME } from "modules/products/ProductListingPage/redux/slice";

const fetchProducts = createAsyncThunk(
  `${SLICE_NAME}/fetchProducts`,
  async () => {}
);

export default fetchProducts;
