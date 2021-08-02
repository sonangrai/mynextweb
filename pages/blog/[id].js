import React from "react";
import styles from "./SIngle.module.scss";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_API}/posts`);
  const datas = await res.json();

  const paths = datas.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${process.env.BASE_API}/posts/${id}`);
  const data = await res.json();

  return {
    props: data,
  };
};

const Blog = (data) => {
  return (
    <div className={styles.blogPage}>
      <div
        className={styles.blogTitle}
        dangerouslySetInnerHTML={{ __html: data.title.rendered }}
      />
    </div>
  );
};

export default Blog;
