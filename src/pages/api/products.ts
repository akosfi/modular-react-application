import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ProductsTypes } from "modules/products";

const products: ProductsTypes.ProductList = [
  { id: "id28937283782", title: "Red Short", price: 232 },
  { id: "id28937398478", title: "Blue Short", price: 240 },
  { id: "id28937349736", title: "Green Jeans", price: 500 },
];

type ProductsResponse = {
  products: ProductsTypes.ProductList;
};

const handler: NextApiHandler = (
  _request: NextApiRequest,
  response: NextApiResponse<ProductsResponse>
) => {
  response.status(200).json({ products });
};

export default handler;
