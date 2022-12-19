import { GetServerSideProps } from 'next';
import CheckoutHistoryPage from '~/components/pages/profile/checkoutHistoryPage';
import { getCategories } from '~/services/request';

export default function CheckoutHistory(props) {
  return <CheckoutHistoryPage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    const categories = await getCategories();
    //   const productInfo = await API.get<ReturnResponse<any>>({
    //     url: API_URL.CATEGORY_READ,
    //     params: { ...query },
    //   });

    const data = await Promise.all([categories]);

    return {
      props: {
        categories: data?.[0]?.data,
        //   cateInfo: data?.[1]?.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};
