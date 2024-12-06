import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch exchange rates from an API
export const fetchRates = createAsyncThunk(
  "currency/fetchRates",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://open.er-api.com/v6/latest/USD" // Replace with your preferred API
      );
      return response.data.rates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    rates: {},
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default currencySlice.reducer;
