import { Inter } from "next/font/google";
import "../styles/style.scss";
import Header from "@/components/Header";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <main className={inter.className}>
      <Head>
        <title>AI image generator</title>
      </Head>
      <Header></Header>
      {Loading ? <Loader></Loader> : <Component {...pageProps} />}
    </main>
  );
}
