import { FC } from "react";
import { useSelector } from "react-redux";

import ProductItem from "modules/products/ProductListingPage/components/ProductList/components/ProductItem";
import productListingPageSelectors from "modules/products/ProductListingPage/redux/selectors";

const ProductList: FC = () => {
  const products = useSelector(productListingPageSelectors.getProducts);

  return (
    <>
      {products.map(({ id }) => (
        <ProductItem key={id} id={id} />
      ))}
    </>
  );
};

export default ProductList;
