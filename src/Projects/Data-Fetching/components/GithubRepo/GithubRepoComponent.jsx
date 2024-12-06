import React from "react";
import SearchBar from "./SearchBar";
import RepoList from "./RepoList";

const GithubRepoComponent = () => {
  return (
    <div className="app">
      <h1>GitHub Repos Viewer</h1>
      <SearchBar />
      <RepoList />
    </div>
  );
};

export default GithubRepoComponent;
