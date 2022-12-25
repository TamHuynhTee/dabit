import { GetServerSideProps } from 'next';
import React from 'react';
import Layout from '~/layouts/Layout';
import { getCategories } from '~/services/request';

type Props = {};

const Unauthorized = (props) => {
  return (
    <Layout categories={props?.categories || []}>
      <div className="flex justify-center">Vui lòng đăng nhập để tiếp tục</div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { req } = context;
    const categories = await getCategories();
    const data = await Promise.all([categories]);

    return {
      props: {
        categories: data?.[0]?.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};

export default Unauthorized;
