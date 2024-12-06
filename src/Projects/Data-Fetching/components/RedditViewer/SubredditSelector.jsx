import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSubreddit, fetchPosts } from "../../../../redux/slices/redditSlice";

const SubredditSelector = () => {
  const [subreddit, setLocalSubreddit] = useState("popular");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLocalSubreddit(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSubreddit(subreddit));
    dispatch(fetchPosts(subreddit));
  };

  return (
    <div className="subreddit-selector">
      <input
        type="text"
        value={subreddit}
        onChange={handleChange}
        placeholder="Enter subreddit (e.g., javascript)"
      />
      <button onClick={handleSearch}>Fetch Posts</button>
    </div>
  );
};

export default SubredditSelector;
