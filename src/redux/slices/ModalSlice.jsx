import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {}, // Stores the state of all modals (open or closed)
};

const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modalId = action.payload;
      state.modals[modalId] = true; // Open the modal
    },
    closeModal: (state, action) => {
      const modalId = action.payload;
      state.modals[modalId] = false; // Close the modal
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
