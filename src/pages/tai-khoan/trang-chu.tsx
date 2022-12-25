import { GetServerSideProps } from 'next';
import DashboardPage from '~/components/pages/profile/dashboardPage';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import { getCategories } from '~/services/request';

export default function ProfileInfo(props) {
  return <DashboardPage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { req } = context;
    const categories = await getCategories();
    const token = req.cookies[COOKIE_KEYS.ACCESS_TOKEN];
    if (!token)
      return {
        redirect: {
          destination: '/unauthorized',
          permanent: false,
        },
      };
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
