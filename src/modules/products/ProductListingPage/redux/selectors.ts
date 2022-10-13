import { RootState } from "store/store";

const getModuleState = (state: RootState) => state.productListingPage;

const getState = (state: RootState) => getModuleState(state).rootState;

const getProducts = (state: RootState) => getState(state).products;

const productListingPageSelectors = {
  getModuleState,
  getState,
  getProducts,
};

export default productListingPageSelectors;
