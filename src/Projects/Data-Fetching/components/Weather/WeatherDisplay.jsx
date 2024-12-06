import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const { data, status, error } = useSelector((state) => state.weather);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!data) return <p>No weather data available</p>;

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
