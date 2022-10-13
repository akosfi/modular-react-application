import { RootState } from "store/store";
import productListingPageSelectors from "modules/ProductListingPage/selectors";

const getState = (state: RootState) =>
  productListingPageSelectors.getModuleState(state).categoryFilter;

const getActiveFilters = (state: RootState) => getState(state).activeFilters;

const categoryFilterSelectors = {
  getState,
  getActiveFilters,
};

export default categoryFilterSelectors;
