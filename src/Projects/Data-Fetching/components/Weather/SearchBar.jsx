import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../../../redux/slices/WeatherFetchSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city) dispatch(fetchWeather(city));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
