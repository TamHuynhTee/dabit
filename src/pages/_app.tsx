import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '~/styles/globals.css';
import '~/styles/modal.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'tailwindcss/tailwind.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Dabit Electronic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
