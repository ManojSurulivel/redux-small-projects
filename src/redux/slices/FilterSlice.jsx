import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'All', // Default to showing all products
  priceRange: [0, 500], // Default price range
};

const FilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setCategory, setPriceRange } = FilterSlice.actions;
export default FilterSlice.reducer;
