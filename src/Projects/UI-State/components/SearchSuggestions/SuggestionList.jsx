import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, clearSuggestions } from "../../../../redux/slices/searchSlice";

const SuggestionList = () => {
  const suggestions = useSelector((state) => state.search.suggestions);
  const dispatch = useDispatch();

  const handleSuggestionClick = (suggestion) => {
    dispatch(setQuery(suggestion));
    dispatch(clearSuggestions());
  };

  return (
    <ul className="suggestion-list">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
