import { IconChecklist, IconWallet } from '@tabler/icons';
import Head from 'next/head';
import React from 'react';
import { ORDER_STATUS_FILTER } from '~/constants/order.constants';
import { formatCurrency2 } from '~/helpers/base.helper';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

const iconsProps = {
  size: 36,
  stroke: 2,
  className: 'text-gray_B9',
};

const filterStatus = [{ label: 'Tất cả', value: '' }, ...ORDER_STATUS_FILTER];

const ProfileInfoPage = (props: any) => {
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
                  <p className="font-semibold">2 đơn hàng</p>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <IconWallet {...iconsProps} />
                  <p className="font-semibold">
                    Đã mua {formatCurrency2(900000)}
                  </p>
                </div>
              </div>
            </div>

            {/* Filter */}
            <Filter />
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
