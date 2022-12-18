// import { GetServerSideProps } from 'next';
import { GetServerSideProps } from 'next';
import ProductCard from '~/components/common/productCard';
import Layout from '~/layouts/Layout';
import API from '~/services/axiosClient';
// import { AuthSync } from '~/middlewares/authSync.middleware';
// import { wrapper } from '~/stores';

export default function Home(props) {
  const { bestseller } = props;
  return (
    <Layout>
      {/* Banner */}
      <div className="grid grid-cols-12 grid-rows-6 grid-flow-row-dense gap-y-3 gap-x-3">
        <div className="col-span-8 row-span-full">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_1.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-4 row-start-1 row-end-4">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_2.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-7">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_3.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-7">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_4.jpg"
            alt="banner-1"
          />
        </div>
      </div>
      {/* Bestseller */}
      <div className="mt-8">
        <p className="text-center text-2xl uppercase font-bold">
          Bán chạy nhất
        </p>
        <div className="mt-4 bg-baseColor p-2">
          <div className="grid grid-cols-5 gap-x-3">
            {bestseller?.data?.map((e, i) => {
              return <ProductCard key={i} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const bestseller = await API.get({ url: '/api/product/list' });
    return {
      props: {
        bestseller: bestseller.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error)
    return {
      notFound: true,
    };
  }
};
