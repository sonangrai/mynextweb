import React from "react";
import BlogCard from "../../components/card/BlogCard";
import styles from "./Home.module.scss";

const Home = ({ datas }) => {
  return (
    <main className={styles.main}>
      <div className={styles.b_row}>
        {datas &&
          datas.map((d) => (
            <div className={styles.blogItem} key={d.id}>
              <BlogCard data={d} />
            </div>
          ))}
      </div>
    </main>
  );
};

export default Home;
