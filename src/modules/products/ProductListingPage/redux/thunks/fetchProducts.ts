import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductList } from "modules/products/types";
import { ThunkApi } from "store/store";

const fetchProducts = createAsyncThunk<ProductList, void, ThunkApi>(
  `productListingPage/fetchProducts`,
  async (_: void, _thunkAPI) => {
    const { products }: { products: ProductList } = await (
      await fetch("/api/products")
    ).json();
    return products;
  }
);

export default fetchProducts;
