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
        <ProfilePageFrame>
          <div className="px-[20px]">
            <div className="flex justify-center">
              <form className="max-w-[400px]"></form>
            </div>
          </div>
        </ProfilePageFrame>
      </Layout>
    </>
  );
};

export default ProfileInfoPage;
