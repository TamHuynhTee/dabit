import { GetServerSideProps } from 'next';
import CheckoutHistoryPage from '~/components/pages/profile/checkoutHistoryPage';
import { API_URL } from '~/constants/api.constant';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import API, { getAuthHeader } from '~/services/axiosClient';
import { getCategories } from '~/services/request';
import { ReturnResponse } from '~/services/response.interface';

export default function CheckoutHistory(props) {
  return <CheckoutHistoryPage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { req } = context;
    const categories = await getCategories();
    const billList = await API.post<ReturnResponse<any>>({
      url: API_URL.USER_BILL_LIST,
      headers: { ...getAuthHeader(req.cookies[COOKIE_KEYS.ACCESS_TOKEN]) },
    });

    const data = await Promise.all([categories, billList]);
    // console.log(`file: lich-su-mua-hang.tsx:22 => data`, data);

    return {
      props: {
        categories: data?.[0]?.data,
        bills: data?.[1]?.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};
