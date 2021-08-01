import React from "react";
import DateFormatter from "../../utils/DateFormatter";
import styles from "./Blogcard.module.scss";
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <Link href={`/blog/${data.id}`}>
        <a>
          <img src={data.featured_image_url} alt={data.title.rendered} />
          <div className={styles.overBoard}>
            <div className={styles.top}>
              <span className={styles.cat}>{data.post_categories[0].name}</span>
              <span className={styles.date}>{DateFormatter(data.date)}</span>
            </div>
            <div className={styles.title}>{data.title.rendered}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
