import { FC } from "react";
import { useSelector } from "react-redux";

import { AddToCartButton } from "modules/cart";
import productListingPageSelectors from "modules/products/ProductListingPage/redux/selectors";

type ProductItemProps = {
  id: string;
};

const ProductItem: FC<ProductItemProps> = ({ id }) => {
  const product = useSelector(
    productListingPageSelectors.createGetProductById(id)
  );

  return (
    <>
      {JSON.stringify(product)}
      <AddToCartButton />
    </>
  );
};

export default ProductItem;
