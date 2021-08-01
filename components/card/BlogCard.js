import React from "react";
import styles from "./Blogcard.module.scss";

const BlogCard = ({ data }) => {
  console.log(data);
  return <div className={styles.blogCard}>{data.title.rendered}</div>;
};

export default BlogCard;
