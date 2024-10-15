import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch weather data from OpenWeather API (replace YOUR_API_KEY with your actual API key)
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityName) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d22b764cbb45bf27a7486a3497c757a2&units=metric`
    );
    return response.data; //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  }
);

const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "",
    weatherData: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    searchHistory: [], // Store searched cities
  },
  reducers: {
    addCityToHistory: (state, action) => {
      // Add searched city to history (if not already there)
      if (!state.searchHistory.includes(action.payload)) {
        state.searchHistory.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload;
        state.city = action.payload.name;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addCityToHistory } = WeatherSlice.actions;
export default WeatherSlice.reducer;
