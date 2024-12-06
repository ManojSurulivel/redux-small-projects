import React from "react";
import { useSelector } from "react-redux";

const RepoList = () => {
  const { repos, status, error } = useSelector((state) => state.github);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="repo-list">
      <h2>Repositories</h2>
      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
