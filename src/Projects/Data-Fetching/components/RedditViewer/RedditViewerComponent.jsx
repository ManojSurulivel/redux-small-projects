import React from "react";
import SubredditSelector from "./SubredditSelector";
import PostList from "./PostList";

const RedditViewerComponent = () => {
  return (
    <div className="app">
      <h1>Reddit Viewer</h1>
      <SubredditSelector />
      <PostList />
    </div>
  );
};

export default RedditViewerComponent;
