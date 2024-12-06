import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const { posts, status, error } = useSelector((state) => state.reddit);

  if (status === "loading") {
    return <p>Loading posts...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
              <p>Upvotes: {post.ups}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
