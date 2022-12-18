import { IconInfoCircle, IconReceipt2, IconShoppingCart } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbs';
import Divider from '~/components/common/divider';
import { formatCurrency2 } from '~/helpers/base.helper';
import Layout from '~/layouts/Layout';
import OrderStatusProgress from './components/orderStatusProgress';

type Props = {};

const OrderTrackingPage = (props: Props) => {
  const { query } = useRouter();

  return (
    <Layout>
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
          <div className="flex items-center gap-1">
            <IconShoppingCart size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Sản phẩm
            </span>
          </div>
          <Divider className="h-[1px] my-3" />

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
                <span>{formatCurrency2(22000000)}</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatCurrency2(
                22000000
              )}`}</div>
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
                <span>{formatCurrency2(22000000)}</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatCurrency2(
                22000000
              )}`}</div>
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
                <span>{formatCurrency2(22000000)}</span>
              </div>
              <div className="col-span-1 flex justify-center">X 1</div>
              <div className="col-span-3 flex justify-end">{`= ${formatCurrency2(
                22000000
              )}`}</div>
            </div>
          </div>

          <div className="flex ml-auto"></div>
        </div>

        <div className="col-span-4 border border-gray_C1 rounded-md p-3">
          <div className="flex items-center gap-1">
            <IconReceipt2 size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Hóa đơn
            </span>
          </div>
          <Divider className="h-[1px] my-3" />

          <div className="flex flex-col gap-y-2 w-full">
            <p className="flex">
              <span className="mr-[60px] font-semibold">Tạm tính:</span>{' '}
              <span className="ml-auto">{formatCurrency2(66000000)}</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Giảm giá:</span>{' '}
              <span className="ml-auto">{formatCurrency2(0)}</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Phí vận chuyển:</span>{' '}
              <span className="ml-auto">{formatCurrency2(15000)}</span>
            </p>
            <p className="flex">
              <span className="mr-[60px] font-semibold">Tổng tiền:</span>{' '}
              <span className="ml-auto">{formatCurrency2(66015000)}</span>
            </p>
          </div>
        </div>

        <div className="col-span-12 border border-gray_C1 rounded-md p-3">
          <div className="flex items-center gap-1">
            <IconInfoCircle size={16} stroke={2} color="#333333" />
            <span className="text-dark_3 font-semibold text-md max_line-1">
              Thông tin khách hàng
            </span>
          </div>
          <Divider className="h-[1px] my-3" />
        </div>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;
