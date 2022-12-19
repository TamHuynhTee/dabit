import Head from 'next/head';
import React from 'react';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

const ProfileInfoPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Thông tin cá nhân</title>
      </Head>
      <Layout categories={props?.categories || []}>
        <ProfilePageFrame>a</ProfilePageFrame>
      </Layout>
    </>
  );
};

export default ProfileInfoPage;
