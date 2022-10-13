import { FC } from "react";

import CategoryFilter from "modules/ProductListingPage/components/CategoryFilter";
import ProductList from "modules/ProductListingPage/components/ProductList";

const ProductListingPage: FC = () => (
  <>
    <CategoryFilter />
    <ProductList />
  </>
);

export default ProductListingPage;
