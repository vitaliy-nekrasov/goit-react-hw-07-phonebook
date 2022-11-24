import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

// Selectors

export const getFilterValue = state => state.filter;
