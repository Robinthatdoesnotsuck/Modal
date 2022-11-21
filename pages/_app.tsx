import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/owo4gkq.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
