import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beginner from "./Projects/Beginner-Level/Beginner";
import Home from "./Home";
import Navbar from "./navbar/Navbar";
import DataFetch from "./Projects/Data-Fetching/DataFetch";
import NewsComponent from "./Projects/Data-Fetching/components/NewsApp/NewsComponent";
import WeatherFetch from "./Projects/Data-Fetching/components/Weather/WeatherFetchComponent";
import UiState from "./Projects/UI-State/UiState";
import ModalComponent from "./Projects/UI-State/components/ModalManager/ModalComponent";
import TabNavigationComponent from "./Projects/UI-State/components/TabNavigation/TabNavigationComponent";
import DropdownMenuComponent from "./Projects/UI-State/components/DropDownMenu/DropDownMenuComponent";
import StepperFormComponent from "./Projects/UI-State/components/StepperForm/StepperFormComponent";
import PaginationComponent from "./Projects/UI-State/components/Pagination/PaginationComponent";
import User from "./Projects/Beginner-Level/components/User";
import Theme from "./Projects/Beginner-Level/components/Theme";
import NoteApp from "./Projects/Beginner-Level/components/NoteApp";
import FormComponent from "./Projects/Beginner-Level/components/FormComponent";
import ProductFilter from "./Projects/Beginner-Level/components/ProductFilter";
import Language from "./Projects/Beginner-Level/components/Language";
import Counter from "./Projects/Beginner-Level/components/Counter";
import Todo from "./Projects/Beginner-Level/components/Todo";
import Authentication from "./Projects/Beginner-Level/components/Authentication";
import Cart from "./Projects/Beginner-Level/components/Cart";
import Favorites from "./Projects/Beginner-Level/components/Favorites";
import WeatherDashboard from "./Projects/Beginner-Level/components/WeatherDashboard";
import ProjectsList from "./Projects/Beginner-Level/ProjectsList";
import GithubRepoComponent from "./Projects/Data-Fetching/components/GithubRepo/GithubRepoComponent";
import QuizAppComponent from "./Projects/Data-Fetching/components/QuizApp/QuizAppComponent";
import RedditViewerComponent from "./Projects/Data-Fetching/components/RedditViewer/RedditViewerComponent";
import CurrencyConverterComponent from "./Projects/Data-Fetching/components/CurrencyConvertor/CurrencyConverterComponent";
import MovieComponent from "./Projects/Data-Fetching/components/MovieFinder/MovieComponent";
import EcommerceComponent from "./Projects/Data-Fetching/components/EcommerceDashboard/EcommerceComponent";
import StockTrackerComponent from "./Projects/Data-Fetching/components/StockTracker/StockTrackerComponent";
import CryptoPricesComponent from "./Projects/Data-Fetching/components/CryptoPrices/CryptoPricesComponent";
import NotificationSystemComponent from "./Projects/UI-State/components/NotificationSystem/NotificationSystemComponent";
import ProfileSettingsComponent from "./Projects/UI-State/components/ProfileSettings/ProfileSettingsComponent";
import SidebarToggleComponent from "./Projects/UI-State/components/SidebarToggle/SidebarToggleComponent";
import MultiThemeComponent from "./Projects/UI-State/components/MultiTheme/MultiThemeComponent";
import SearchSuggestionsComponent from "./Projects/UI-State/components/SearchSuggestions/SearchSuggestionsComponent";
import ExpenseTrackerComponent from "./Projects/Beginner-Level/components/ExpenseTracker/ExpenseTrackerComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Beginner" element={<Beginner />} >
          <Route path="beginner-projects" element={<ProjectsList />} />
          <Route path="count" element={<Counter />}  />
          <Route path="user" element={<User />} /> 
          <Route path="todo" element={<Todo />} /> 
          <Route path="auth" element={<Authentication />} /> 
          <Route path="theme" element={<Theme />} /> 
          <Route path="cart" element={<Cart />} /> 
          <Route path="favorites" element={<Favorites />} /> 
          <Route path="weather" element={<WeatherDashboard />} /> 
          <Route path="notes" element={<NoteApp />} /> 
          <Route path="form" element={<FormComponent />} /> 
          <Route path="filter" element={<ProductFilter />} /> 
          <Route path="language" element={<Language />} /> 
          <Route path="expense" element={<ExpenseTrackerComponent />} /> 


        </Route>

        <Route path="/DataFetch" element={<DataFetch />} >
          {/* Nested routes */}
          <Route path="newscomponent" element={<NewsComponent />} />
          <Route path="weatherfetch" element={<WeatherFetch />} />
          <Route path="github" element={<GithubRepoComponent />} />
          <Route path="quizapp" element={<QuizAppComponent />} />
          <Route path="reddit" element={<RedditViewerComponent />} />
          <Route path="currency" element={<CurrencyConverterComponent />} />
          <Route path="movie" element={<MovieComponent />} />
          <Route path="ecommerce" element={<EcommerceComponent />} />
          <Route path="stock" element={<StockTrackerComponent />} />
          <Route path="crypto" element={<CryptoPricesComponent />} />

        </Route>

        <Route path="/UiState" element={<UiState  />} >

          <Route path="modal" element={<ModalComponent />}/>
          <Route path="tabnavigation" element={<TabNavigationComponent />}/>
          <Route path="dropdownMenu" element={<DropdownMenuComponent />}/>
          <Route path="stepperform" element={<StepperFormComponent />} />
          <Route path="pagination" element={<PaginationComponent />} />
          <Route path="notification" element={<NotificationSystemComponent />} />
          <Route path="profilesettings" element={<ProfileSettingsComponent />} />
          <Route path="sidebar" element={<SidebarToggleComponent />} />
          <Route path="multitheme" element={<MultiThemeComponent />} />
          <Route path="search" element={<SearchSuggestionsComponent />} />

        </Route>

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;