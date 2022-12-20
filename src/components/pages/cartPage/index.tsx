import { IconX } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import { LOCAL_STORAGE_KEY } from '~/constants/localStorage.constants';
import { formatCurrency2, getFromLocalStorage } from '~/helpers/base.helper';
import { productURL } from '~/helpers/url.helper';
// import useCartHook from '~/hooks/useCart';
import Layout from '~/layouts/Layout';
import { calculateCartBill } from '~/services/request';

const CartPage = (props: any) => {
  //   console.log(`file: index.tsx:10 => props`, props);
  return (
    <Layout categories={props?.categories || []}>
      <CartSection {...props} />
    </Layout>
  );
};

const CartSection = (props) => {
  const { userCartData } = props;
  //   const cartHook = useCartHook();
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    if (userCartData) {
      setCart(userCartData?.cart_details || []);
      return;
    }
    // user not login

    const localCart =
      getFromLocalStorage<Array<any>>(LOCAL_STORAGE_KEY.CART_PRODUCT_KEY) || [];
    if (localCart && localCart.length > 0) {
      calculateCartBill({
        payload: {
          cart: localCart,
          address: {
            province: '',
            district: '',
            address: '',
          },
          discountCode: '',
        },
      }).then((res) => {
        setCart(res.data?.cart_details);
      });
    }
  }, []);

  return (
    <div className="my-[30px]">
      <p className="text-center text-xl uppercase font-bold">Giỏ hàng</p>
      <div className="mt-[30px] grid grid-cols-4 gap-x-[50px] min-h-[400px]">
        <div className="col-span-3 h-full flex flex-col gap-y-[20px]">
          {cart.length === 0 && <p>Giỏ hàng chưa có sản phẩm nào</p>}
          {cart.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>
        <div className="col-span-1 h-full bg-gray_F1 rounded-lg"></div>
      </div>
    </div>
  );
};

const CartItem = (props) => {
  const { image_url, name, price = 0, color, quantity, product } = props;
  const [itemQuantity, setItemQuantity] = React.useState(quantity);

  return (
    <div className="rounded-md w-full p-2 grid grid-cols-[100px_minmax(300px,_1fr)_600px] items-center">
      <div className="w-[100px] h-[100px] rounded-md">
        <img
          src={
            image_url || '/assets/images/product/photo_2022-09-28_21-58-51.jpg'
          }
          className="w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="h-full mx-3 flex flex-col justify-center gap-y-2">
        <Link href={productURL(product)} target="_blank">
          <a className="font-semibold text-base max_line-1">
            {name || '<Chưa cập nhật>'}
          </a>
        </Link>
        <p className="text-sm italic text-dark_3">
          <span className="text-gray_B9">Màu:</span> {color}
        </p>
        {/* <p className="text-sm italic text-dark_3">
          <span className="text-gray_B9">Ram:</span> 8GB
        </p> */}
      </div>
      <div className="grid grid-cols-5">
        {/* <div className="col-span-1 flex flex-col items-center">
          <span className="text-[16px]">22,000,000 VND</span>
        </div> */}
        <div className="col-span-1 h-full mx-3 flex gap-x-2 justify-center items-center">
          <button className="h-[25px] w-[25px] rounded-md border border-gray_D9 flex items-center justify-center">
            -
          </button>
          <div className="">{itemQuantity}</div>
          <button className="h-[25px] w-[25px] rounded-md border border-gray_D9 flex items-center justify-center">
            +
          </button>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          {/* <span className="italic text-[14px] text-gray_B9">
            Tổng tiền
          </span> */}
          <span className="text-[16px] font-semibold">
            {formatCurrency2(price)}
          </span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <button>
            <IconX stroke={2} color="#333333" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
