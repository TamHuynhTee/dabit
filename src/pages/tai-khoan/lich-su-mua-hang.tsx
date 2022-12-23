import { GetServerSideProps } from 'next';
import CheckoutHistoryPage from '~/components/pages/profile/checkoutHistoryPage';
import { API_URL } from '~/constants/api.constant';
import API from '~/services/axiosClient';
import { getCategories } from '~/services/request';
import { ReturnResponse } from '~/services/response.interface';

export default function CheckoutHistory(props) {
  return <CheckoutHistoryPage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // const { query } = context;
    const categories = await getCategories();
    const billList = await API.get<ReturnResponse<any>>({
      url: API_URL.BILL_LIST,
    });

    const data = await Promise.all([categories, billList]);
    // console.log(`file: lich-su-mua-hang.tsx:22 => data`, data);

    return {
      props: {
        categories: data?.[0]?.data,
        bills: data?.[1],
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};
