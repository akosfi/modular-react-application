import { RootState } from "store/store";

const getState = (state: RootState) =>
  state.products.productListingPage.rootState;

const getProducts = (state: RootState) => getState(state).products;

const productListingPageSelectors = {
  getState,
  getProducts,
};

export default productListingPageSelectors;
