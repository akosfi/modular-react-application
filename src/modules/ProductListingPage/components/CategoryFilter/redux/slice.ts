import { combineReducers, createSlice } from "@reduxjs/toolkit";

export type CategoryFilterState = {
  activeFilters: string[];
};

const initialState: CategoryFilterState = {
  activeFilters: [],
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    addActiveFilter: (state: CategoryFilterState) => state,
  },
});

export const { actions: categoryFilterActions } = categoryFilterSlice;

export default categoryFilterSlice.reducer;
