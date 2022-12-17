import { IconDeviceMobile, IconKey } from '@tabler/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import ErrorText from '~/components/common/errorText';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import { API_URL } from '~/constants/api.constant';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import { MODAL_KEYS } from '~/constants/modal.constants';
import { PHONE_REGEX } from '~/constants/regex.constants';
import { responseHasError } from '~/helpers/base.helper';
import { setCookie } from '~/helpers/cookie.helper';
import { closeModalOrDrawer, openModalOrDrawer } from '~/helpers/modal.helper';
import { ACCESS_REFRESH_TOKEN } from '~/models/token.model';
import { USER_MODEL } from '~/models/user.model';
import API from '~/services/axiosClient';

interface IResLogin {
  user: USER_MODEL;
  tokens: ACCESS_REFRESH_TOKEN;
}

const ModalLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data: any) => {
    try {
      const result = await API.post<IResLogin>({
        url: API_URL.LOGIN,
        body: {
          username: data.phone,
          password: data.password,
        },
      });

      if (responseHasError(result.error)) throw new Error(result.message);
      toast.success('Đăng nhập thành công');

      setCookie(COOKIE_KEYS.ACCESS_TOKEN, result.data.tokens.access.token);
      setCookie(COOKIE_KEYS.REFRESH_TOKEN, result.data.tokens.refresh.token);

      closeModalOrDrawer(MODAL_KEYS.MODAL_LOGIN);
    } catch (error) {
      toast.error(error?.message || error?.data?.message);
    }
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
          onSubmit={handleSubmit(handleLogin)}
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
                placeholder="Nhập số điện thoại hoặc email"
              />
            </Flex>
            {errors?.phone && <ErrorText text={errors?.phone.message} />}
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
          <button
            type="button"
            onClick={() => {
              closeModalOrDrawer(MODAL_KEYS.MODAL_LOGIN);
              openModalOrDrawer(MODAL_KEYS.MODAL_REGISTER);
            }}
            className="text-[#0000ee] cursor-pointer text-center"
          >
            Tạo tài khoản
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
