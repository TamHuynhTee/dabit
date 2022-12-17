import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbs';
import { MODAL_KEYS } from '~/constants/modal.constants';
import { openModalOrDrawer } from '~/helpers/modal.helper';
import Layout from '~/layouts/Layout';

type Props = {};

const CheckOrderPage = (props: Props) => {
  return (
    <Layout>
      <Breadcrumb
        path={[
          {
            slug: '/kiem-tra-don-hang',
            name: 'Tra cứu đơn hàng',
          },
        ]}
      />
      <CheckOrderForm />
    </Layout>
  );
};

const CheckOrderForm = () => {
  return (
    <div className="my-[30px] px-[150px]">
      <p className="text-center text-3xl font-semibold">
        Kiểm tra thông tin đơn hàng <br /> và tình trạng vận chuyển
      </p>
      <div className="flex justify-center">
        <form className="mt-[20px] px-[70px] rounded-lg flex flex-col items-center gap-y-4 justify-center bg-gray_F1 min-w-[500px] max-w-[500px] p-3">
          <input
            type="text"
            className="px-2 py-1 outline-none w-full rounded-md"
            placeholder="Nhập số điện thoại (bắt buộc)"
          />
          <input
            type="text"
            className="px-2 py-1 outline-none w-full rounded-md"
            placeholder="Nhập số mã đơn hàng (bắt buộc)"
          />
          <button
            type="submit"
            className="w-full px-2 py-1 bg-black text-white rounded-md"
          >
            Tra cứu
          </button>

          <div className="flex items-center w-full">
            <div className="flex-1 border-t border-gray_D9"></div>
            <span className="mx-[10px]">Hoặc</span>
            <div className="flex-1 border-t border-gray_D9"></div>
          </div>

          <button
            type="button"
            onClick={() => openModalOrDrawer(MODAL_KEYS.MODAL_LOGIN)}
            className="w-full px-2 py-1 bg-baseColor text-black rounded-md"
          >
            Đăng nhập để tra cứu thuận tiện hơn
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOrderPage;
