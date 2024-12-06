import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, addCityToHistory } from "../../../redux/slices/WeatherSlice";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef()

  const weather = useSelector((state) => state.weather.weatherData);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);
  const searchHistory = useSelector((state) => state.weather.searchHistory);

  const handleSearch = () => {
    if (city.trim() !== "") {
      dispatch(fetchWeather(city));
      dispatch(addCityToHistory(city));
      setCity("");
      inputRef.current.focus()
    }
  };

  return (
    <div className="weather">
      <h1> 8. Weather Dashboard</h1>

      <input
        type="text"
        className="weather-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        ref={inputRef}
        placeholder="Enter city name"
      />
      <button className="weather-btn" onClick={handleSearch}>Search</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {weather && status === "succeeded" && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}

      <h3>Search History</h3>
      <ul>
        {searchHistory.map((city, index) => (
          <li key={index} onClick={() => dispatch(fetchWeather(city))}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDashboard;
