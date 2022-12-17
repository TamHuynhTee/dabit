import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import '~/styles/globals.css';
import '~/styles/modal.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'tailwindcss/tailwind.css';
import { Provider, useDispatch } from 'react-redux';
import { requestProfile } from '~/stores/auth/authSaga';
import store from '~/stores';
import AuthSync from '~/middlewares/authSync.middleware';

function App({ Component, ...rest }: AppProps) {
  //   const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = rest;

  return (
    <Provider store={store}>
      <Head>
        <title>Dabit Electronic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthSync>
        <Component {...pageProps} />
      </AuthSync>
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          duration: 4000,
        }}
      />
    </Provider>
  );
}

export default App;
