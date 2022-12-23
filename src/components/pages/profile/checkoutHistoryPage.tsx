import { IconChecklist, IconWallet } from '@tabler/icons';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ORDER_STATUS_FILTER } from '~/constants/order.constants';
import { formatCurrency2 } from '~/helpers/base.helper';
import { ORDER_STATUS_TEXT } from '~/interfaces/order.interface';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

const iconsProps = {
  size: 36,
  stroke: 2,
  className: 'text-gray_B9',
};

const filterStatus = [{ label: 'Tất cả', value: '' }, ...ORDER_STATUS_FILTER];

const ProfileInfoPage = (props: any) => {
  const { bills } = props;
  const { data = [], count = 0, total = 0 } = bills;

  return (
    <>
      <Head>
        <title>Lịch sử mua hàng</title>
      </Head>
      <Layout categories={props?.categories || []}>
        <ProfilePageFrame>
          <div className="">
            <h3 className="text-[22px] font-semibold uppercase text-center">
              Quản lý đơn hàng
            </h3>

            <div className="my-8">
              <div className="flex items-center justify-center gap-x-12">
                <div className="flex flex-col items-center gap-y-2">
                  <IconChecklist {...iconsProps} />
                  <p className="font-semibold">{count} đơn hàng</p>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <IconWallet {...iconsProps} />
                  <p className="font-semibold">
                    Đã mua {formatCurrency2(total)}
                  </p>
                </div>
              </div>
            </div>

            {/* Filter */}
            <Filter />

            <div className="">
              <div className="border border-gray_B9 rounded-2xl grid grid-cols-9 items-center p-2 mb-4">
                <div className="col-span-3 flex justify-center">
                  <span className="select-none">Sản phẩm</span>
                </div>
                <div className="col-span-2 flex justify-center">
                  <span className="select-none">Tình trạng</span>
                </div>
                <div className="col-span-2 flex justify-center">
                  <span className="select-none">Tổng tiền</span>
                </div>
                <div className="col-span-2 flex justify-center"></div>
              </div>
              {data.map((bill, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-9 items-center p-3 first:border-t-0 border-t border-t-gray_B9"
                  >
                    <div className="col-span-3 flex justify-center">
                      <span className="select-none">...</span>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <span className="select-none bg-baseColor rounded-full text-black py-2 px-4">
                        {ORDER_STATUS_TEXT[bill?.status?.[0]?.statusTimeline]}
                      </span>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <span className="select-none">
                        {formatCurrency2(bill?.total || 0)}
                      </span>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <Link href={`/kiem-tra-don-hang/${bill?._id}`}>
                        <a className="select-none bg-error rounded-full text-white py-2 px-4">
                          Xem chi tiết
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
              {count === 0 && (
                <p className="text-center italic">Bạn chưa có đơn hàng nào</p>
              )}
            </div>
          </div>
        </ProfilePageFrame>
      </Layout>
    </>
  );
};

const Filter = () => {
  const [currStatus, setCurrStatus] = React.useState<number | string>(
    filterStatus[0].value
  );

  const handleChooseStatus = async (status) => {
    setCurrStatus(status);
  };

  return (
    <div className="flex justify-between gap-x-2 my-4 items-center">
      {filterStatus.map((status, index) => {
        const active = status.value === currStatus;
        return (
          <div className="" key={index}>
            <span
              className={`${
                active ? 'text-error font-semibold' : 'text-gray_B9'
              } cursor-pointer`}
              onClick={() => handleChooseStatus(status.value)}
            >
              {status.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileInfoPage;
