import Head from "next/head";
import Sidebar from "../components/layouts/Sidebar";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" c />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
