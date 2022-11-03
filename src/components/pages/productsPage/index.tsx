import Breadcrumb from '~/components/common/breadcrumbs';
import { MOBILE_BRANDS } from '~/dumps/brands';
import LayoutHome from '~/layouts/LayoutHome';
import BrandFilter from './components/brandFilter';
import Filter from './components/filter';

type Props = {};

const ProductsPage = (props: Props) => {
  return (
    <LayoutHome>
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
    </LayoutHome>
  );
};

export default ProductsPage;
