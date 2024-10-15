import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const NotesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(), // Generates a unique id for each note
          text,
        },
      }),
    },
    editNote: (state, action) => {
      const { id, newText } = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) {
        note.text = newText;
      }
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, editNote, deleteNote } = NotesSlice.actions;
export default NotesSlice.reducer;
