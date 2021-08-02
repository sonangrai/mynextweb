import React from "react";
import DateFormatter from "../../utils/DateFormatter";
import styles from "./Blogcard.module.scss";
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <Link href={`/blog/${data.id}`}>
        <a>
          <div className={styles.cardLf}>
            <div className={styles.top}>
              <span className={styles.date}>{DateFormatter(data.date)}</span>
              <span className={styles.cat}>{data.post_categories[0].name}</span>
            </div>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: data.title.rendered }}
            />
            <div
              className={styles.excerpt}
              dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
            />
          </div>
          <div className={styles.cardRt}>
            <img src={data.featured_image_url} alt={data.title.rendered} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
