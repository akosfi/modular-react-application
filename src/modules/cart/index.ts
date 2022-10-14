import cartReducer from "modules/cart/redux/slice";
import * as CartTypes from "modules/cart/types";
import { CartPage } from "modules/cart/CartPage";
import { AddToCartButton } from "modules/cart/AddToCartButton";
import cartThunks from "modules/cart/redux/thunks";

const { addProductToCart } = cartThunks;

const cartActions = {
  addProductToCart,
};

export { cartReducer, CartTypes, CartPage, AddToCartButton, cartActions };
