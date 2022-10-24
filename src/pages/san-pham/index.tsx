import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbs';
import { MOBILE_BRANDS } from '~/dumps/brands';
import LayoutHome from '~/layouts/LayoutHome';

type Props = {};

const ProductList = (props: Props) => {
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

const BrandFilter = (props: {
  brands: Array<{ icon: string; value: string }>;
}) => {
  const { brands } = props;
  return (
    <div className="flex flex-wrap gap-2 items-center bg-white mt-4">
      {brands.map((e, i) => (
        <div
          key={i}
          className="h-[36px] p-1 w-auto border border-gray_D9 hover:border-black cursor-pointer rounded-xl"
        >
          <img
            src={e.icon}
            alt={e.value}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

const Filter = (props: { brands: Array<{ icon: string; value: string }> }) => {
  const { brands } = props;
  return (
    <div className="flex flex-wrap gap-2 items-center bg-white mt-4">
      {brands.map((e, i) => (
        <div
          key={i}
          className="h-[36px] p-1 w-auto border border-gray_D9 hover:border-black cursor-pointer rounded-xl"
        >
          <img
            src={e.icon}
            alt={e.value}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
