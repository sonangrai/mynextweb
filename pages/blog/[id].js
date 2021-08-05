import Head from "next/head";
import React from "react";
import DateFormatter from "../../utils/DateFormatter";
import styles from "./Single.module.scss";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`);
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`);
  const data = await res.json();

  return {
    props: data,
  };
};

const Blog = (data) => {
  return (
    <>
      <Head>
        <title>{data.title.rendered}</title>
        <meta name="description" content={data.yoast_head_json.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.yoast_head_json.title} />
        <meta
          property="og:description"
          content={data.yoast_head_json.description}
        />
        <meta property="og:site_name" content={data.yoast_head_json.title} />
        <meta property="og:image" content={data.featured_image_url} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={data.yoast_head_json.title} />
        <meta
          property="twitter:description"
          content={data.yoast_head_json.description}
        />
      </Head>
      <div className={styles.blogPage}>
        <div className={styles.topper}>
          <div className={styles.tag}>{data.post_categories[0].name}</div>
          <div
            className={styles.blogTitle}
            dangerouslySetInnerHTML={{ __html: data.title.rendered }}
          />
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
          />
          <div className={styles.date}>{DateFormatter(data.date)}</div>
        </div>

        <div className={styles.featuredImg}>
          <img src={data.featured_image_url} alt={data.title.rendered} />
        </div>
        <div className={styles.body}>
          <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
        </div>
      </div>
    </>
  );
};

export default Blog;
