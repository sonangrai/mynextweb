import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [categories, setcategories] = useState();

  const getCats = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`);
    const data = await res.json();
    if (data) {
      return data;
    }
  };
  useEffect(() => {
    getCats().then((res) => {
      setcategories(res);
    });
    return () => {};
  }, []);

  return (
    <div className={styles.sidebarCont}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/drqgginx9/image/upload/v1627784399/logo_kwwrgy.png"
          alt="logo"
        />
      </div>
      <div className={styles.nav}>
        {categories ? (
          categories.map((cat) => (
            <div key={cat.id} className={styles.link}>
              <Link href={`/category/${cat.name}`}>
                <a>
                  <span className={styles.catName}>{cat.name}</span>
                  <sup className={styles.count}>{cat.count}</sup>
                </a>
              </Link>
            </div>
          ))
        ) : (
          <>No Cat</>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
