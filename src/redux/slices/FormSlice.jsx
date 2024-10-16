// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   name: '',
//   email: '',
//   password: '',
//   submitted: false,
// };

// const FormSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     updateField: (state, action) => {
//       const { field, value } = action.payload;
//       state[field] = value;
//     },
//     submitForm: (state) => {
//       state.submitted = true;
//     },
//     resetForm: (state) => {
//       state.name = '';
//       state.email = '';
//       state.password = '';
//       state.submitted = false;
//     },
//   },
// });

// export const { updateField, submitForm, resetForm } = FormSlice.actions;

// export default FormSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);  // Add a new form submission
    },
    resetForm: (state) => {
      state.entries = [];  // Clear all entries
    },
  },
});

export const { addEntry, resetForm } = FormSlice.actions;

export default FormSlice.reducer;
