import Breadcrumb from '~/components/common/breadcrumbs';
import { MOBILE_BRANDS } from '~/dumps/brands';
import Layout from '~/layouts/Layout';
import BrandFilter from './components/brandFilter';
import Filter from './components/filter';

type Props = {};

const ProductsPage = (props: Props) => {
  return (
    <Layout>
      <Breadcrumb
        path={[
          {
            slug: '/san-pham',
            name: 'Sản phẩm',
          },
        ]}
      />
      {/* Brands */}
      <BrandFilter brands={MOBILE_BRANDS} />
      {/* Filter */}
      <Filter brands={MOBILE_BRANDS} />
    </Layout>
  );
};

export default ProductsPage;
