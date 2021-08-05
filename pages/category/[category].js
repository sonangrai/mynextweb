import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogCard from "../../components/card/BlogCard";
import styles from "../home/Home.module.scss";

const index = () => {
  const paths = useRouter();
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(false);

  const getBlogs = async (q) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts?filter[category_name]=${q}`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    setloading(true);
    if (Object.keys(paths.query).length !== 0) {
      console.log(paths);
      getBlogs(paths.query.category).then((res) => {
        setblogs(res);
        setloading(false);
      });
    }
    return () => {};
  }, [paths.query]);

  return (
    <main className={styles.main}>
      <div className={styles.b_row}>
        {loading ? (
          <>Loading</>
        ) : (
          blogs.map((b) => <BlogCard data={b} key={b.id} />)
        )}
      </div>
    </main>
  );
};

export default index;
