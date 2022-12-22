import { IconMinus, IconPlus, IconShoppingCartPlus } from '@tabler/icons';
import React from 'react';
import { toast } from 'react-hot-toast';
import Breadcrumb from '~/components/common/breadcrumbs';
import Divider from '~/components/common/divider';
import FavoriteButton from '~/components/common/favoriteButton';
import StarRating from '~/components/common/starRating';
import { formatCurrency2 } from '~/helpers/base.helper';
import useCartHook from '~/hooks/useCartHook';
import Layout from '~/layouts/Layout';
import useAuth from '~/stores/auth';
import GallerySlider from './components/GallerySlider';
import Ratings from './components/RatingsSummary';
import styles from './style.module.css';

type Props = {};

const rams = [
  { value: '512gb', price: 28990000, title: '512 GB' },
  { value: '256gb', price: 23990000, title: '256 GB' },
  { value: '128gb', price: 21990000, title: '128 GB' },
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

// color = reduce quantity = 0 => coming soon
// enable = false => ngung kinh doanh

const ProductDetailPage = (props: any) => {
  const { product } = props;
  const {
    price = 0,
    sale: salePercent = 0,
    total_rate = 0,
    comments = [],
    name,
    desc,
    colors = [],
    image_url,
    enable = true,
  } = product;
  const [currentColor, setCurrentColor] = React.useState<any>(colors?.[0]);
  const [quantity, setQuantity] = React.useState<number>(1);
  //   const [{ signedIn }] = useAuth();
  const { addToCart } = useCartHook();

  const newPrice = React.useMemo(
    () => Math.round(price * (1 - salePercent / 100) * 100) / 100,
    []
  );

  const gallery = React.useMemo(() => {
    const images = image_url ? [image_url] : [];
    colors?.forEach((element) => {
      images.push(element?.image_url);
    });
    return images;
  }, []);

  const handleAddToCart = () => {
    if (currentColor) {
      addToCart({
        product: product?._id,
        quantity,
        color: currentColor?.color,
      });
      toast.success('Đã thêm vào giỏ hàng');
    } else {
      toast.error('Không thể mua hàng');
    }
  };

  const handleGoToCart = () => {
    if (currentColor) {
      addToCart({
        product: product?._id,
        quantity,
        color: currentColor?.color,
      });
      toast.success('Đã thêm vào giỏ hàng');
      window.location.href = '/gio-hang';
    } else {
      toast.error('Không thể mua hàng');
    }
  };

  const disableButton = currentColor?.quantity === 0;

  const isComingSoon = React.useMemo(() => {
    const inStock = colors?.reduce((e, v) => e + v?.quantity, 0);
    return inStock <= 0;
  }, []);

  return (
    <Layout categories={props?.categories || []}>
      <Breadcrumb
        path={[
          {
            slug: '/san-pham',
            name: 'Sản phẩm',
          },
          {
            slug: '/san-pham',
            name: name,
          },
        ]}
      />
      {/* Info */}
      <div className="mt-4 flex gap-4 items-center">
        <p className="text-[22px] font-semibold">{name}</p>
        <Ratings reviews={comments?.length || 0} rating={total_rate || 0} />
      </div>
      <Divider className="h-[1px] my-2" />

      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-4">
          <GallerySlider images={gallery} />
        </div>
        <div className="col-span-4 flex flex-col">
          {/* Price */}
          <div className="flex items-center gap-2">
            <p className="text-[22px] text-yellow_E3 font-bold">
              {formatCurrency2(newPrice)}
            </p>
            {newPrice > 0 && (
              <p className="text-[16px] text-dark_3 font-semibold line-through">
                {formatCurrency2(price)}
              </p>
            )}
          </div>
          {/* Properties */}
          {/* <div className="mt-2">
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
          </div> */}
          {/* Colors */}
          <div className="mt-2">
            <span className="text-gray_C1 font-semibold text-sm">Màu</span>
            <div className="grid grid-cols-3 gap-2 items-center bg-white">
              {colors.map((e, i) => {
                const active = currentColor?.color === e.color;
                return (
                  <div
                    key={i}
                    className={`p-2 col-span-1 w-auto bg-white border ${
                      active
                        ? 'border-yellow_E3'
                        : 'border-gray_D9 hover:border-black'
                    } cursor-pointer rounded-xl grid grid-cols-4 gap-1`}
                    onClick={() => setCurrentColor(e)}
                  >
                    <div className="col-span-1">
                      <div className="h-[36px] w-full">
                        <img
                          src={e?.image_url}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-start col-span-3">
                      <span className={`text-sm font-semibold max_line-1`}>
                        {e.color}
                      </span>
                      <span className={`text-xs font-normal`}>
                        {e.quantity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Quantity */}
          <QuantityPicker
            productPrice={newPrice}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          {/* Buttons */}
          <div className="my-auto">
            <div className="grid grid-cols-6 gap-2 items-center bg-white">
              {!enable && (
                <div className="col-span-5 flex h-full items-center justify-center">
                  <span className="text-center text-error italic font-semibold">
                    Sản phẩm ngừng kinh doanh
                  </span>
                </div>
              )}
              {isComingSoon && (
                <div className="col-span-5 flex h-full items-center justify-center">
                  <span className="text-center text-gray_B9 italic font-semibold">
                    Sản phẩm sắp ra mắt
                  </span>
                </div>
              )}
              {(!isComingSoon || !enable) && (
                <>
                  {disableButton && (
                    <p className="text-error text-lg col-span-5">
                      Sản phẩm tạm thời hết hàng!
                    </p>
                  )}
                  <button
                    className="col-span-3 border-2 border-yellow_E3 disabled:bg-gray_68 disabled:select-none disabled:border-gray_68 bg-yellow_E3 rounded-lg w-full p-[5px] flex flex-col items-center"
                    disabled={disableButton}
                    onClick={handleGoToCart}
                  >
                    <span className="font-bold text-base text-white">
                      MUA NGAY
                    </span>
                    <span className="font-semibold text-[13px] text-white">
                      (Giao hàng tận nơi)
                    </span>
                  </button>
                  <button
                    className="col-span-2 border-2 border-yellow_E3 disabled:border-gray_68 rounded-lg w-full p-[5px] flex flex-col items-center"
                    disabled={disableButton}
                    onClick={handleAddToCart}
                  >
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
                </>
              )}
              <FavoriteButton containerClass="col-span-1 border-2 border-gray_D9 bg-gray_D9 rounded-lg w-full p-[15px] flex justify-center" />
              {/* <div className="col-span-1 border-2 border-gray_D9 bg-gray_D9 rounded-lg w-full p-[15px] flex justify-center">
              </div> */}
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

      <Divider className="h-[1px] my-2" />

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
      <Divider className="h-[1px] my-2" />

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
      <Divider className="h-[1px] my-2" />
      <div className="">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Thông tin sản phẩm
        </p>

        <div className="bg-gray_F1 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          {desc}
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-[20px] font-semibold text-dark_3 mb-2 uppercase">
          Đánh giá sản phẩm
        </p>

        <div className="bg-gray_F1 grid grid-cols-5 gap-x-3 p-2 rounded-xl">
          <StarRating total_rate={total_rate} />
        </div>
      </div>
    </Layout>
  );
};

const QuantityPicker = ({
  productPrice = 0,
  quantity,
  setQuantity,
}: {
  productPrice?: number;
  quantity: number;
  setQuantity: any;
}) => {
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
      <div className="my-4">
        <p className="text-[18px] text-justify text-dark_3">
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
