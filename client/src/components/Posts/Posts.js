import React from "react";
import Post from "./Post/Post";

import useStyles from "./posts-styles.js";
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;
