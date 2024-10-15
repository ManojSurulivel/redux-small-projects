import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/CounterSlice";
import TodoReducer from "../slices/TodoSlice";
import UserReducer from "../slices/UserSlice";
import AuthReducer from "../slices/AuthSlice";
import ThemeReducer from "../slices/ThemeSlice";
import CartReducer from "../slices/CartSlice";
import FavoritesReducer from "../slices/FavoritesSlice";
import WeatherReducer from "../slices/WeatherSlice";
import NotesReducer from "../slices/NotesSlice";

export const store = configureStore({
  reducer: {
    counterInfo: CounterReducer,
    userInfo: UserReducer,
    todoInfo: TodoReducer,
    authInfo: AuthReducer,
    theme: ThemeReducer,
    cart: CartReducer,
    favorites: FavoritesReducer,
    weather: WeatherReducer,
    notes: NotesReducer,

  },
});
