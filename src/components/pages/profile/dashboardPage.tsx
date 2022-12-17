import Head from 'next/head';
import React from 'react';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ cá nhân</title>
      </Head>
      <Layout>
        <ProfilePageFrame>
          <div className="grid grid-cols-2 gap-x-4"></div>
        </ProfilePageFrame>
      </Layout>
    </>
  );
};

export default DashboardPage;
