import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Store from "./store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <ThemeProvider attribute="class">
        <Store>
          <Component {...pageProps} />
        </Store>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
