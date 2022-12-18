import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingCartPlus,
} from '@tabler/icons';
import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbs';
import Divider from '~/components/common/divider';
import { formatCurrency2 } from '~/helpers/base.helper';
import Layout from '~/layouts/Layout';
import GallerySlider from './components/GallerySlider';
import Ratings from './components/RatingsSummary';
import styles from './style.module.css';

type Props = {};

const rams = [
  { value: '512gb', price: 28990000, title: '512 GB' },
  { value: '256gb', price: 23990000, title: '256 GB' },
  { value: '128gb', price: 21990000, title: '128 GB' },
];

const colors = [
  {
    value: 'blue',
    price: 28990000,
    title: 'Xanh',
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-51.jpg',
  },
  {
    value: 'yellow_E3',
    price: 28990000,
    title: 'Đỏ',
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-54.jpg',
  },
  {
    value: 'purple',
    price: 28990000,
    title: 'Tím',
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-56.jpg',
  },
];

const specifications = [
  {
    label: 'Kích thước màn hình',
    value: '6.1 inches',
  },
  {
    label: 'Độ phân giải màn hình',
    value: '2532 x 1170 pixels',
  },
  {
    label: 'Trọng lượng',
    value: '172g',
  },
  {
    label: 'Công nghệ màn hình',
    value: 'OLED',
  },
  {
    label: 'Camera sau',
    value: 'Camera chính: 12MP, ƒ/1.5\nCamera góc siêu rộng: 12MP, ƒ/2.4',
  },
  {
    label: 'Camera trước',
    value: '12MP, ƒ/1.9',
  },
  {
    label: 'Chipset',
    value: 'Apple A15 Bionic',
  },
  {
    label: 'Dung lượng RAM',
    value: '6 GB',
  },
];

const similarities = [
  {
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-51.jpg',
    name: 'Iphone 14 Pro',
    price: 21000000,
  },
  {
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-54.jpg',
    name: 'Iphone 14 Pro',
    price: 21000000,
  },
  {
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-56.jpg',
    name: 'Iphone 14 Pro',
    price: 21000000,
  },
  {
    thumbnail: '/assets/images/product/photo_2022-09-28_21-58-51.jpg',
    name: 'Iphone 14 Pro',
    price: 21000000,
  },
];

const ProductDetailPage = (props: Props) => {
  const [currentProperty, setCurrentProperty] = React.useState<string>('512gb');
  const [currentColor, setCurrentColor] = React.useState<string>('blue');
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  return (
    <Layout>
      <Breadcrumb
        path={[
          {
            slug: '/san-pham',
            name: 'Sản phẩm',
          },
          {
            slug: '/san-pham',
            name: 'Laptop Apple MacBook Air M1 2020 8GB/256GB/7-core GPU (MGN93SA/A)',
          },
        ]}
      />
      {/* Info */}
      <div className="mt-4 flex gap-4 items-center">
        <p className="text-[22px] font-semibold">
          Laptop Apple MacBook Air M1 2020 8GB/256GB/7-core GPU (MGN93SA/A)
        </p>
        <Ratings reviews={175} rating={4.95} />
      </div>
      <Divider className="h-[2px] my-2" />

      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-4">
          <GallerySlider
            images={[
              '/assets/images/product/photo_2022-09-28_21-58-51.jpg',
              '/assets/images/product/photo_2022-09-28_21-58-54.jpg',
              '/assets/images/product/photo_2022-09-28_21-58-56.jpg',
            ]}
          />
        </div>
        <div className="col-span-4">
          {/* Price */}
          <div className="flex items-center gap-2">
            <p className="text-[22px] text-yellow_E3 font-bold">
              {formatCurrency2(22000000)}
            </p>
            <p className="text-[16px] text-dark_3 font-semibold line-through">
              {formatCurrency2(26000000)}
            </p>
          </div>
          {/* Properties */}
          <div className="mt-2">
            <span className="text-gray_C1 font-semibold text-sm">
              Phiên bản RAM
            </span>
            <div className="grid grid-cols-3 gap-2 items-center bg-white">
              {rams.map((e, i) => {
                const active = currentProperty === e.value;
                return (
                  <div
                    key={i}
                    className={`p-2 col-span-1 w-auto bg-white border ${
                      active
                        ? 'border-yellow_E3'
                        : 'border-gray_D9 hover:border-black'
                    } cursor-pointer rounded-xl flex flex-col gap-1 items-center`}
                    onClick={() => setCurrentProperty(e.value)}
                  >
                    <span className={` text-sm font-semibold`}>{e.title}</span>
                    <span className={` text-xs font-normal`}>
                      {formatCurrency2(e.price)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Colors */}
          <div className="mt-2">
            <span className="text-gray_C1 font-semibold text-sm">Màu</span>
            <div className="grid grid-cols-3 gap-2 items-center bg-white">
              {colors.map((e, i) => {
                const active = currentColor === e.value;
                return (
                  <div
                    key={i}
                    className={`p-2 col-span-1 w-auto bg-white border ${
                      active
                        ? 'border-yellow_E3'
                        : 'border-gray_D9 hover:border-black'
                    } cursor-pointer rounded-xl grid grid-cols-4 gap-1`}
                    onClick={() => setCurrentColor(e.value)}
                  >
                    <div className="col-span-1">
                      <div className="h-full w-full">
                        <img
                          src={e.thumbnail}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-start col-span-3">
                      <span className={` text-sm font-semibold`}>
                        {e.title}
                      </span>
                      <span className={` text-xs font-normal`}>
                        {formatCurrency2(e.price)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Quantity */}
          <QuantityPicker productPrice={22000000} />
          {/* Buttons */}
          <div className="mt-4">
            <div className="grid grid-cols-6 gap-2 items-center bg-white">
              <button className="col-span-3 border-2 border-yellow_E3 bg-yellow_E3 rounded-lg w-full p-[5px] flex flex-col items-center">
                <span className="font-bold text-base text-white">MUA NGAY</span>
                <span className="font-semibold text-[13px] text-white">
                  (Giao hàng tận nơi)
                </span>
              </button>
              <button className="col-span-2 border-2 border-yellow_E3 rounded-lg w-full p-[5px] flex flex-col items-center">
                <IconShoppingCartPlus
                  size={24}
                  strokeWidth={2}
                  //   color={'yellow_E3'}
                  className="text-yellow_E3"
                />
                <span className="font-semibold text-[12px] text-yellow_E3">
                  Thêm vào giỏ hàng
                </span>
              </button>
              <button
                className="col-span-1 border-2 border-gray_D9 bg-gray_D9 rounded-lg w-full p-[15px] flex justify-center"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <IconHeart
                  size={24}
                  strokeWidth={2}
                  color={'black'}
                  className={`${styles.favoriteIcon}${
                    isFavorite ? ` ${styles.active}` : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className={styles.productSpecification}>
            <p className="text-[16px] font-semibold">Thông số kỹ thuật</p>
            <div className="mt-2 border border-gray_C1 rounded-xl">
              {specifications.map((e, i) => (
                <div key={i} className={styles.productSpecificationItem}>
                  <span>{e.label}</span>
                  <span>{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider className="h-[2px] my-2" />

      <div className="">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Phụ kiện đi kèm
        </p>

        <div className="bg-gray_D9 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          {similarities.map((e, i) => (
            <div key={i} className="bg-white rounded-xl p-2">
              <div className="w-full max-h-[200px] h-auto">
                <img
                  src={e.thumbnail}
                  alt=""
                  className="w-full h-full max-h-[200px] object-contain"
                />
              </div>
              <Divider className="h-[1px] my-2" />
              <p className="max_line-3 font-semibold text-lg text-center">
                {e.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Divider className="h-[2px] my-2" />

      <div className="">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Sản phẩm tương tự
        </p>

        <div className="bg-gray_D9 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          {similarities.map((e, i) => (
            <div key={i} className="bg-white rounded-xl p-2">
              <div className="w-full max-h-[200px] h-auto">
                <img
                  src={e.thumbnail}
                  alt=""
                  className="w-full h-full max-h-[200px] object-contain"
                />
              </div>
              <Divider className="h-[1px] my-2" />
              <p className="max_line-3 font-semibold text-lg text-center">
                {e.name}
              </p>
              <p className="max_line-1 font-semibold text-lg text-yellow_E3 text-center">
                {formatCurrency2(e.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Divider className="h-[2px] my-2" />
      <div className="">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Thông tin sản phẩm
        </p>

        <div className="bg-gray_F1 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          {/* {similarities.map((e, i) => (
            <div key={i} className="bg-white rounded-xl p-2">
              <div className="w-full max-h-[200px] h-auto">
                <img
                  src={e.thumbnail}
                  alt=""
                  className="w-full h-full max-h-[200px] object-contain"
                />
              </div>
              <Divider className="h-[1px] my-2" />
              <p className="max_line-3 font-semibold text-lg text-center">
                {e.name}
              </p>
              <p className="max_line-1 font-semibold text-lg text-yellow_E3 text-center">
                {formatCurrency2(e.price)}
              </p>
            </div>
          ))} */}
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Đánh giá sản phẩm
        </p>

        <div className="bg-gray_F1 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          <div className="flex items-center mb-3">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
              4.95 out of 5
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const QuantityPicker = ({ productPrice = 0 }: { productPrice?: number }) => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const handleIncrease = () => {
    if (quantity === 5) return;
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-2 items-center bg-white">
        <div className="col-span-1 grid grid-cols-3 gap-1">
          <div className="col-span-1 flex items-center justify-end">
            <button
              className="bg-black flex items-center justify-center p-1 rounded-md"
              onClick={handleDecrease}
            >
              <IconMinus size={24} strokeWidth={2} color="#fff" />
            </button>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span className="text-[18px]">{quantity}</span>
          </div>
          <div className="col-span-1 flex items-center justify-start">
            <button
              className="bg-black flex items-center justify-center p-1 rounded-md"
              onClick={handleIncrease}
            >
              <IconPlus size={24} strokeWidth={2} color="#fff" />
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <span className="text-sm text-gray_C1 italic">
            (Mua tối đa 5 sản phẩm)
          </span>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[16px] text-center text-dark_3">
          Tổng tạm tính:{' '}
          <span className="text-yellow_E3 italic">
            {formatCurrency2(productPrice * quantity)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
