import React from "react";
import DateFormatter from "../../utils/DateFormatter";
import styles from "./Blogcard.module.scss";

const BlogCard = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <img src={data.featured_image_url} alt={data.title.rendered} />
      <div className={styles.overBoard}>
        <div className={styles.top}>
          <span className={styles.cat}>{data.post_categories[0].name}</span>
          <span className={styles.date}>{DateFormatter(data.date)}</span>
        </div>
        <div className={styles.title}>{data.title.rendered}</div>
      </div>
    </div>
  );
};

export default BlogCard;
