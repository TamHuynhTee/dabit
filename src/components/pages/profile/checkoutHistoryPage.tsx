import Head from 'next/head';
import React from 'react';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

type Props = {};

const ProfileInfoPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Lịch sử mua hàng</title>
      </Head>
      <Layout>
        <ProfilePageFrame>a</ProfilePageFrame>
      </Layout>
    </>
  );
};

export default ProfileInfoPage;
