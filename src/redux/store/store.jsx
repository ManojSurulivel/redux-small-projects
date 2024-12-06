import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/CounterSlice.jsx";
import TodoReducer from "../slices/TodoSlice.jsx";
import UserReducer from "../slices/UserSlice.jsx";
import AuthReducer from "../slices/AuthSlice.jsx";
import ThemeReducer from "../slices/ThemeSlice.jsx";
import CartReducer from "../slices/CartSlice.jsx";
import FavoritesReducer from "../slices/FavoritesSlice.jsx";
import WeatherReducer from "../slices/WeatherSlice.jsx";
import NotesReducer from "../slices/NotesSlice.jsx";
import FormReducer from "../slices/FormSlice.jsx";
import ProductSlice from "../slices/ProductSlice.jsx";
import FilterSlice from "../slices/FilterSlice.jsx";
import LanguageSlice from  "../slices/LanguageSlice.jsx";
import newsReducer from "/Users/manoj/Documents/Redux-small-projects/src/redux/slices/newsSlice.jsx";
import WeatherFetchSlice from "../../Projects/Data-Fetching/components/Weather/WeatherFetchComponent.jsx";
import ModalReducer from "../slices/ModalSlice.jsx";
import tabReducer from "../slices/tabSlice.jsx";
import dropdownReducer from "../slices/dropdownSlice.jsx";
import formSliceUI from "../slices/formSliceUI.jsx";
import paginationReducer from "../slices/paginationSlice.jsx";
import githubReducer from "../slices/githubSlice.jsx";
import quizReducer from "../slices/quizSlice.jsx";
import redditReducer from "../slices/redditSlice.jsx";
import currencyReducer from "../slices/currencySlice.jsx";
import movieReducer from "../slices/movieSlice.jsx";
import cartsSlice from "../slices/cartsSlice.jsx";
import productsSlice from "../slices/productsSlice.jsx";
import stockReducer from "../slices/stockSlice.jsx";
import cryptoReducer from "../slices/cryptoSlice.jsx";
import notificationReducer from "../slices/notificationSlice.jsx";
import profileReducer from "../slices/profileSlice.jsx";
import sidebarReducer from "../slices/sidebarSlice.jsx";
import MultithemeReducer from "../slices/MultithemeSlice.jsx";
import searchReducer from "../slices/searchSlice.jsx";
import expenseReducer from "../slices/expenseSlice.jsx";


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
    form: FormReducer,
    products: ProductSlice,
    filters: FilterSlice,
    language: LanguageSlice,    
    news: newsReducer,
    weatherFetch: WeatherFetchSlice,
    modals: ModalReducer,
    tabs: tabReducer,
    dropdown: dropdownReducer,
    formUi: formSliceUI,
    pagination: paginationReducer,
    github: githubReducer,
    quiz: quizReducer,
    reddit: redditReducer,
    currency: currencyReducer,
    movies: movieReducer,
    productsdash: productsSlice,
    carts: cartsSlice,
    stocks: stockReducer,
    crypto: cryptoReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    multitheme: MultithemeReducer,
    search: searchReducer,
    expense: expenseReducer,





  },
});
