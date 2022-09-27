import { IconDeviceMobile, IconKey } from '@tabler/icons';
import React from 'react';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';

const ModalLogin = () => {
  return (
    <div className="mt-3">
      <Flex alignItem="center" className="justify-center">
        <ImageRender
          src="/nobida_logo.png"
          alt="logo"
          className="h-full w-[40px]"
        />
      </Flex>
      <div className="mt-[20px]">
        <form className="flex flex-col gap-3 px-[10px]">
          <Flex
            className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
            alignItem="center"
          >
            <IconDeviceMobile size={20} />
            <input
              type="text"
              className="border-none outline-none bg-transparent flex-1"
              placeholder="Nhập số điện thoại"
            />
          </Flex>
          <Flex
            className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
            alignItem="center"
          >
            <IconKey size={20} />
            <input
              type="password"
              className="border-none outline-none bg-transparent flex-1"
              placeholder="Nhập mật khẩu"
            />
          </Flex>
          <label htmlFor="remember" className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <span>Giữ đăng nhập</span>
          </label>
          <button
            type="submit"
            className="py-[5px] h-[40px] bg-[#000] text-[#fff] rounded"
          >
            Đăng nhập
          </button>
          <a className="text-[#3c3cf5] cursor-pointer">Quên mật khẩu?</a>
          <a className="text-[#0000ee] cursor-pointer text-center">
            Tạo tài khoản
          </a>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
