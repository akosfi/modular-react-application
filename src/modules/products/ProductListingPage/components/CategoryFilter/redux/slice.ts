import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "categoryFilter";

export type CategoryFilterState = {
  activeFilters: string[];
};

const initialState: CategoryFilterState = {
  activeFilters: [],
};

const categoryFilterSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addActiveFilter: (state: CategoryFilterState) => state,
  },
});

export const { actions: categoryFilterSliceActions } = categoryFilterSlice;

export default categoryFilterSlice.reducer;
