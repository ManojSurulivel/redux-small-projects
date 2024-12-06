import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch stock data from a mock API
export const fetchStockData = createAsyncThunk(
  "stocks/fetchStockData",
  async (stockSymbols, thunkAPI) => {
    try {
      // Example API endpoint: Replace with an actual stock API
      const responses = await Promise.all(
        stockSymbols.map((symbol) =>
          axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=YOUR_API_KEY`)
        )
      );
      return responses.map((res, index) => ({
        symbol: stockSymbols[index],
        data: res.data,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    items: [], // { symbol, data }
    symbols: ["AAPL", "GOOGL"], // Default stocks to track
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    addStock: (state, action) => {
      if (!state.symbols.includes(action.payload)) {
        state.symbols.push(action.payload);
      }
    },
    removeStock: (state, action) => {
      state.symbols = state.symbols.filter((symbol) => symbol !== action.payload);
      state.items = state.items.filter((item) => item.symbol !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addStock, removeStock } = stockSlice.actions;
export default stockSlice.reducer;
