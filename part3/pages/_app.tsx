import Footer from '@/Components/sharing/Footer';
import Nav from '@/Components/sharing/Nav';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg"></link>
        <title>linkbrary</title>
      </Head>
      <Nav isShared={false} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
