import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
  },
};

const formSliceUI = createSlice({
  name: "formUi",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { nextStep, prevStep, updateFormData } = formSliceUI.actions;
export default formSliceUI.reducer;
