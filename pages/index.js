import React from "react";
import Head from "next/head";
import Home from "./home/Home";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_API}/posts`);
  const data = await res.json();

  if (!data) {
    console.log("error");
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Sonahang Rai - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home datas={data} />
    </>
  );
};

export default index;
