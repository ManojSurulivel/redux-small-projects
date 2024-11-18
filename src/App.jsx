import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import User from "./components/User";
import "./App.css";
import Authentication from "./components/Authentication";
import Theme from "./components/Theme";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import WeatherDashboard from "./components/WeatherDashboard";
import NoteApp from "./components/NoteApp";
import FormComponent from "./components/FormComponent";
import ProductFilter from "./components/ProductFilter";
import Language from "./components/Language";

function App() {
  return (
    <div className="app">
      <p className="p">" Redux small Logics "</p><hr />
      <Counter /><hr />
      <User /><hr />
      <Todo /><hr />
      <Authentication /><hr />
      <Theme /><hr />
      <Cart /><hr />
      <Favorites /><hr />
      <WeatherDashboard /><hr />
      <NoteApp /> <hr />
      <FormComponent /> <hr />
      <ProductFilter /><hr />
      <Language /><hr />
    </div>
  );
}

export default App;
