import React from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

function WeatherFetchComponent() {
  return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherDisplay />
      </div>
  );
}

export default WeatherFetchComponent;
