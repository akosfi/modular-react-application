import { RootState } from "store/store";

const getState = (state: RootState) =>
  state.products.productListingPage.rootState;

const getProducts = (state: RootState) => getState(state).products;

const createGetProductById = (id: string) => (state: RootState) =>
  getProducts(state).find(({ id: _id }) => id === _id);

const productListingPageSelectors = {
  getState,
  getProducts,
  createGetProductById,
};

export default productListingPageSelectors;
