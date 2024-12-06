import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, setSuggestions, clearSuggestions } from "../../../../redux/slices/searchSlice";

const SearchBars = () => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim()) {
      // Mock API call to fetch suggestions
      const mockSuggestions = ["React", "Redux", "React Native", "React Router"];
      const filtered = mockSuggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setSuggestions(filtered));
    } else {
      dispatch(clearSuggestions());
    }
  }, [query, dispatch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </div>
  );
};

export default SearchBars;
