import React from "react";
import Head from "next/head";
import Home from "./home/Home";

const index = () => {
  return (
    <>
      <Head>
        <title>Sonahang Rai - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </>
  );
};

export default index;
