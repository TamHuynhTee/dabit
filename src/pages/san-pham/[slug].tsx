import { GetServerSideProps } from 'next';
import ProductDetailPage from '~/components/pages/productDetailPage';
import { API_URL } from '~/constants/api.constant';
import API from '~/services/axiosClient';
import { getCategories } from '~/services/request';
import { ReturnResponse } from '~/services/response.interface';

type Props = {};

const ProductDetail = (props: Props) => {
  return <ProductDetailPage {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    // console.log(`file: [slug].tsx:17 => query`, query);
    const categories = await getCategories();
    const productInfo = await API.get<ReturnResponse<any>>({
      url: API_URL.PRODUCT_READ,
      params: { _id: query.slug },
    });

    const data = await Promise.all([categories, productInfo]);
    // console.log(`file: [slug].tsx:25 => data`, data);

    return {
      props: {
        categories: data?.[0]?.data,
        product: data?.[1]?.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};

export default ProductDetail;
