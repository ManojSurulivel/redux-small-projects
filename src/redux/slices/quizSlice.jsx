import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch quiz questions from an API
export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
      ); // Change API as needed
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    saveAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { saveAnswer, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
