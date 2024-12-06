import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../../../../redux/slices/MultithemeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.multitheme.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  return (
    <div className="theme-toggle">
      <h3>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h3>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <select onChange={handleThemeChange} value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
