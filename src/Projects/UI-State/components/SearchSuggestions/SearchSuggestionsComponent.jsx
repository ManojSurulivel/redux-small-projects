import React from "react";
import SearchBars from "./SearchBars";
import SuggestionList from "./SuggestionList";
import './SearchSuggestionsComponent.css'

const SearchSuggestionsComponent = () => {
  return (
    <div className="search">
      <h1>Search Suggestions</h1>
      <SearchBars />
      <SuggestionList />
    </div>
  );
};

export default SearchSuggestionsComponent;
