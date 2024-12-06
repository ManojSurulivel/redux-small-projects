import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../../redux/slices/newsSlice";

const NewsFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setCategory("all"))}>All</button>
      <button onClick={() => dispatch(setCategory("technology"))}>
        Technology
      </button>
      <button onClick={() => dispatch(setCategory("sports"))}>Sports</button>
      <button onClick={() => dispatch(setCategory("business"))}>Business</button>
    </div>
  );
};

export default NewsFilter;
