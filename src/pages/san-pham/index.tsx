import { GetServerSideProps } from 'next';
import ProductsPage from '~/components/pages/productsPage';
import { API_URL } from '~/constants/api.constant';
import API from '~/services/axiosClient';
import { getCategories } from '~/services/request';
import { ReturnResponse } from '~/services/response.interface';

type Props = {};

const ProductList = (props: Props) => {
  return <ProductsPage {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    const categories = await getCategories();
    const cateInfo = await API.get<ReturnResponse<any>>({
      url: API_URL.CATEGORY_READ,
      params: { ...query },
    });

    const productList = await API.get<ReturnResponse<any>>({
      url: API_URL.PRODUCT_LIST,
      // params: { ...query },
    });

    const data = await Promise.all([categories, cateInfo, productList]);

    return {
      props: {
        categories: data?.[0]?.data,
        cateInfo: data?.[1]?.data,
        products: { ...data?.[2]?.data },
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};

export default ProductList;
