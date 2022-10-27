import { IconInfoCircle, IconReceipt2, IconShoppingCart } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbs';
import { formatMoney } from '~/helpers/base.helper';
import LayoutHome from '~/layouts/LayoutHome';
import OrderStatusProgress from './components/orderStatusProgress';

type Props = {};

const OrderTrackingPage = (props: Props) => {
  const { query } = useRouter();

  return (
    <LayoutHome>
      <Breadcrumb
        path={[
          {
            slug: '/kiem-tra-don-hang',
            name: 'Tra cứu đơn hàng',
          },
          {
            slug: `/kiem-tra-don-hang/${query.order}`,
            name: `#${query.order}`,
          },
        ]}
      />
      <OrderStatusProgress status={1} />
      <div className="grid grid-cols-12 w-full gap-5">
        <div className="col-span-8 border border-gray_C1 rounded-md p-3">
          <div className="flex items-center gap-1 mb-4">
            <IconShoppingCart size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Sản phẩm
            </span>
          </div>

          <div className="flex flex-col gap-y-4 mb-4">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1 relative h-[70px]">
                <Image
                  src={'/assets/images/product/photo_2022-09-28_21-58-54.jpg'}
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="col-span-4">
                <Link href="#!">
                  <a className="hover:underline max_line-2">
                    Iphone 14 Promax đỏ
                  </a>
                </Link>
              </div>
              <div className="col-span-3 flex justify-center">
                <span>{formatMoney(22000000)} VND</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatMoney(
                22000000
              )} VND`}</div>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1 relative h-[70px]">
                <Image
                  src={'/assets/images/product/photo_2022-09-28_21-58-51.jpg'}
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="col-span-4">
                <Link href="#!">
                  <a className="hover:underline max_line-2">
                    Iphone 14 Promax xanh ngọc
                  </a>
                </Link>
              </div>
              <div className="col-span-3 flex justify-center">
                <span>{formatMoney(22000000)} VND</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatMoney(
                22000000
              )} VND`}</div>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1 relative h-[70px]">
                <Image
                  src={'/assets/images/product/photo_2022-09-28_21-58-56.jpg'}
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="col-span-4">
                <Link href="#!">
                  <a className="hover:underline max_line-2">
                    Iphone 14 Promax tím hồng
                  </a>
                </Link>
              </div>
              <div className="col-span-3 flex justify-center">
                <span>{formatMoney(22000000)} VND</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatMoney(
                22000000
              )} VND`}</div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-max ml-auto">
            <p className="flex">
              <span className="mr-[60px] font-semibold">Tạm tính:</span>{' '}
              <span className="ml-auto">{formatMoney(66000000)} VND</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Giảm giá:</span>{' '}
              <span className="ml-auto">{formatMoney(0)} VND</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Phí vận chuyển:</span>{' '}
              <span className="ml-auto">{formatMoney(15000)} VND</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Tổng tiền:</span>{' '}
              <span className="ml-auto">{formatMoney(66015000)} VND</span>
            </p>
          </div>
        </div>

        <div className="col-span-4 border border-gray_C1 rounded-md p-3">
          <div className="flex items-center gap-1 mb-4">
            <IconReceipt2 size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Hóa đơn
            </span>
          </div>
        </div>

        <div className="col-span-12 border border-gray_C1 rounded-md p-3">
          <div className="flex items-center gap-1 mb-4">
            <IconInfoCircle size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Thông tin khách hàng
            </span>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default OrderTrackingPage;
