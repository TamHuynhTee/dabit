import Breadcrumb from '~/components/common/breadcrumbs';
import ProductCard from '~/components/common/productCard';
import { MOBILE_BRANDS } from '~/dumps/brands';
import Layout from '~/layouts/Layout';
import BrandFilter from './components/brandFilter';
import Filter from './components/filter';

type Props = {};

// Bộ lọc

// field: category, specs, colors, min_price, max_price, skip, limit, sortName, sortType
// type:
//      search: string - name, code - undefine = all
//      category: string
//      specs: object - {name: string, values: any[]} - undefine = all | or | [{name: string, values: string}]
//      colors: string - undefine = all - colors: "white;blue"
//      min_price: number - undefine = 0
//      max_price: number - undefine = 1000000000
//      skip: number - undefine = 0
//      limit: number - undefine = 20
//      sortName: string - in ["price", "sale", "sold", "total_rate"]
//      sortType: number - 1 tăng dần, -1 giảm dần
// rule:
//      specs hiệu quả khi đi với category,
//      sortType và sortName hiệu quả khi đi với nhau
// example
//      "name": "Laptop",
//      "specs": {name: "Ram", values:"8gb;16gb"},
//      "colors": ["Red"],
//      "max_price": 65000000
// if skip == undefine => trả về count để phân trang

const ProductsPage = (props: any) => {
  const { products, cateInfo } = props;
  console.log(`file: index.tsx:34 => cateInfo`, cateInfo);
  return (
    <Layout categories={props.categories || []}>
      <Breadcrumb
        path={[
          {
            slug: '/san-pham',
            name: 'Sản phẩm',
          },
          {
            slug: '/san-pham',
            name: (
              <span className="flex items-center gap-x-2">
                <img
                  src={cateInfo?.icon_url}
                  className="h-[24px] w-[24px]"
                  alt="breadcrumb_icon"
                />{' '}
                {cateInfo?.name}
              </span>
            ),
          },
        ]}
      />

      <div className="h-[300px] w-full my-4 rounded">
        <img
          src={cateInfo?.image_url}
          alt=""
          className="w-full h-full object-cover rounded"
        />
      </div>
      {/* Filter */}
      <Filter brands={MOBILE_BRANDS} />

      <div className="my-5"></div>

      <div className="grid grid-cols-5 gap-x-3 gap-y-3">
        {products?.data?.length <= 0 && (
          <p>Không có sản phẩm của danh mục này</p>
        )}
        {(products?.data || []).map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </Layout>
  );
};

export default ProductsPage;
