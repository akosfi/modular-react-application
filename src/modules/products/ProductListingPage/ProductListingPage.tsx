import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoryFilter from "modules/products/ProductListingPage/components/CategoryFilter";
import ProductList from "modules/products/ProductListingPage/components/ProductList";

import { AppDispatch } from "store/store";
import fetchProducts from "./redux/thunks/fetchProducts";

const ProductListingPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <CategoryFilter />
      <ProductList />
    </>
  );
};

export default ProductListingPage;
