import {
  IconDeviceMobile,
  IconKey,
  IconMail,
  IconShieldLock,
} from '@tabler/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorText from '~/components/common/errorText';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import { MODAL_KEYS } from '~/constants/modal.constants';
import { PHONE_REGEX } from '~/constants/regex.constants';
import { closeModalOrDrawer, openModalOrDrawer } from '~/helpers/modal.helper';

const ModalRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data: any) => {
    try {
      console.log(
        'MasSu => file: index.tsx => line 12 => handleRegister => data',
        data
      );
    } catch (error) {}
  };

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
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-3 px-[10px]"
        >
          <div>
            <Flex
              className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
              alignItem="center"
            >
              <IconDeviceMobile size={20} />
              <input
                {...register('phone', {
                  required: 'Vui lòng nhập số điện thoại',
                  pattern: {
                    value: PHONE_REGEX,
                    message: 'Số điện thoại không đúng định dạng',
                  },
                })}
                type="text"
                className="border-none outline-none bg-transparent flex-1"
                placeholder="Nhập số điện thoại (bắt buộc)"
              />
            </Flex>
            {errors?.phone && <ErrorText text={errors?.phone.message} />}
          </div>
          <div>
            <Flex
              className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
              alignItem="center"
            >
              <IconMail size={20} />
              <input
                {...register('email', {
                  required: 'Vui lòng nhập email',
                  //   pattern: {
                  //     value: PHONE_REGEX,
                  //     message: 'Số điện thoại không đúng định dạng',
                  //   },
                })}
                type="email"
                className="border-none outline-none bg-transparent flex-1"
                placeholder="Nhập email (bắt buộc)"
              />
            </Flex>
            {errors?.email && <ErrorText text={errors?.email.message} />}
          </div>
          <div>
            <Flex
              className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
              alignItem="center"
            >
              <IconKey size={20} />
              <input
                {...register('password', {
                  required: 'Vui lòng nhập mật khẩu',
                  minLength: {
                    value: 6,
                    message: 'Nhập ít nhất 6 ký tự',
                  },
                })}
                type="password"
                className="border-none outline-none bg-transparent flex-1"
                placeholder="Nhập mật khẩu"
              />
            </Flex>
            {errors?.password && <ErrorText text={errors?.password.message} />}
          </div>
          <div>
            <Flex
              className="py-[5px] h-[40px] gap-3 border-b border-b-[#c3c3c3]"
              alignItem="center"
            >
              <IconShieldLock size={20} />
              <input
                {...register('confirmPassword', {
                  required: 'Vui lòng xác nhận mật khẩu',
                  minLength: {
                    value: 6,
                    message: 'Nhập ít nhất 6 ký tự',
                  },
                })}
                type="password"
                className="border-none outline-none bg-transparent flex-1"
                placeholder="Xác nhận mật khẩu"
              />
            </Flex>
            {errors?.confirmPassword && (
              <ErrorText text={errors?.confirmPassword.message} />
            )}
          </div>
          <label htmlFor="agreeTerms" className="flex items-center gap-2">
            <input type="checkbox" name="agreeTerms" id="agreeTerms" />
            <span>Tôi đồng ý với các điều khoản sử dụng</span>
          </label>
          <button
            type="submit"
            className="py-[5px] h-[40px] bg-[#000] text-[#fff] rounded"
          >
            Đăng ký
          </button>
          <button
            onClick={() => {
              closeModalOrDrawer(MODAL_KEYS.MODAL_REGISTER);
              openModalOrDrawer(MODAL_KEYS.MODAL_LOGIN);
            }}
            type="button"
            className="text-[#3c3cf5] cursor-pointer"
          >
            Đã có tài khoản? Đăng nhập
          </button>
          {/* <a className="text-[#0000ee] cursor-pointer text-center">
            Tạo tài khoản
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
