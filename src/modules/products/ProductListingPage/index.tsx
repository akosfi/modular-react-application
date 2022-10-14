import { FC } from "react";

import CategoryFilter from "modules/products/ProductListingPage/components/CategoryFilter";
import ProductList from "modules/products/ProductListingPage/components/ProductList";

const ProductListingPage: FC = () => (
  <>
    <CategoryFilter />
    <ProductList />
  </>
);

export default ProductListingPage;
