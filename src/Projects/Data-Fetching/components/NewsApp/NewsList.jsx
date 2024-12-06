import React from "react";
import { useSelector } from "react-redux";

const NewsList = () => {
  const { filteredArticles, status } = useSelector((state) => state.news);

  if (status === "loading") return <p>Loading news...</p>;
  if (status === "failed") return <p>Failed to load news.</p>;

  return (
    <ul>
      {filteredArticles.map((article) => (
        <li key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
