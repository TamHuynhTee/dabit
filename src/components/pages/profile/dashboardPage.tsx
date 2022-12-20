import { IconBusinessplan, IconCalendarPlus, IconReceipt } from '@tabler/icons';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency2 } from '~/helpers/base.helper';
import { DateJS } from '~/helpers/date.helper';
import Layout from '~/layouts/Layout';
import { selectAuthState } from '~/stores/auth/authSlice';
import ProfilePageFrame from './components/profilePageFrame';

const iconsProps = {
  size: 48,
  stroke: 2,
  className: 'text-dark_3',
};

const DashboardPage = (props) => {
  const authState = useSelector(selectAuthState);

  const profile = authState.userInfo;

  return (
    <>
      <Head>
        <title>Trang chủ cá nhân</title>
      </Head>
      <Layout categories={props?.categories || []}>
        <ProfilePageFrame>
          <div className="grid grid-cols-6 gap-x-4">
            <div className="col-span-3">
              <div className="w-full p-[10px] pt-[10px] border rounded-xl border-gray_D9">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <div className="h-[50px] w-[50px] rounded-full border border-gray_68">
                    <img
                      src="/nobida_logo.png"
                      alt="logo"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <span className="">Xin chào,</span>
                  <p className="font-semibold text-center uppercase text-[20px] mx-[20px]">
                    {profile?.name}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-x-4 mt-6">
                  <div className="col-span-1 flex flex-col gap-x-2 items-center">
                    <span className="">Ngày tham gia</span>
                    <IconCalendarPlus {...iconsProps} />
                    <span className="mt-1">
                      {DateJS.getFormatDate(profile?.createdAt)}
                    </span>
                  </div>
                  <div className="col-span-1 flex flex-col gap-x-2 items-center">
                    <span className="">Chi tiêu tháng này</span>
                    <IconBusinessplan {...iconsProps} />
                    <span className="mt-1">{formatCurrency2(4299000)}</span>
                  </div>
                  <div className="col-span-1 flex flex-col gap-x-2 items-center">
                    <span className="">Chi tiêu 12 tháng</span>
                    <IconReceipt {...iconsProps} />
                    <span className="mt-1">{formatCurrency2(11329000)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        </ProfilePageFrame>
      </Layout>
    </>
  );
};

export default DashboardPage;
