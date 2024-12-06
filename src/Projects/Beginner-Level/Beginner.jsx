// import React from "react";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";
// import User from "./components/User";
// import "./Beginner.css";
// import Authentication from "./components/Authentication";
// import Theme from "./components/Theme";
// import Cart from "./components/Cart";
// import Favorites from "./components/Favorites";
// import WeatherDashboard from "./components/WeatherDashboard";
// import NoteApp from "./components/NoteApp";
// import FormComponent from "./components/FormComponent";
// import ProductFilter from "./components/ProductFilter";
// import Language from "./components/Language";

// function Beginner() {
//   return (
//     <div className="app">
//       <p className="p">" Redux small Concepts Projects "</p><hr />
//       <Counter /><hr />
//       <User /><hr />
//       <Todo /><hr />
//       <Authentication /><hr />
//       <Theme /><hr />
//       <Cart /><hr />
//       <Favorites /><hr />
//       <WeatherDashboard /><hr />
//       <NoteApp /> <hr />
//       <FormComponent /> <hr />
//       <ProductFilter /><hr />
//       <Language />
   
//     </div>
//   );
// }

// export default Beginner;

import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "./Beginner.css";

const Beginner = () => {
  return (
    <div className="biginner-state-container">
      <div className="sidebar">
        <NavLink to="/Beginner/beginner-projects"><h2 className="sidebar-heading">Projects</h2></NavLink>
        <ul className="beginner-links">
          <li><NavLink to="/Beginner/count"> Counter </NavLink></li>
          <li><NavLink to="/Beginner/user"> User Toggle </NavLink></li>
          <li><NavLink to="/Beginner/todo"> Todo List </NavLink></li>
          <li><NavLink to="/Beginner/auth"> Authentication </NavLink></li>
          <li><NavLink to="/Beginner/theme"> Theme </NavLink></li>
          <li><NavLink to="/Beginner/cart"> Cart </NavLink></li>
          <li><NavLink to="/Beginner/favorites"> Favorites </NavLink></li>
          <li><NavLink to="/Beginner/weather"> Weather </NavLink></li>
          <li><NavLink to="/Beginner/notes"> Notes </NavLink></li>
          <li><Link to="/Beginner/form"> Form </Link></li>
          <li><Link to="/Beginner/filter"> Filter </Link></li>
          <li><Link to="/Beginner/language"> Language </Link></li>
          <li><Link to="/Beginner/expense"> Expense Tracker </Link></li>

        </ul>
      </div>

    <div className="biginner-content">
    <NavLink to="/Beginner/beginner-projects" className="biginner-heading"><h2>Biginner Level  React-Redux Projects</h2></NavLink>
        <Outlet /> 
    </div>    
    </div>
  );
};

export default Beginner;



