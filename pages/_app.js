import Head from "next/head";
import Sidebar from "../components/layouts/Sidebar";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="sonangApp">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" c />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/drqgginx9/image/upload/v1627784399/logo_kwwrgy.png"
          type="image/png"
          sizes="16x16"
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NXDWFFPBS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8NXDWFFPBS');
`,
          }}
        />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
