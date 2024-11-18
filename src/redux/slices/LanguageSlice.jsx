import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'English', // Default language
};

const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'English' ? 'Tamil' : 'English';
    },
  },
});

export const { toggleLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;
