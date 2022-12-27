import { IconEye, IconEyeOff } from '@tabler/icons';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorText from '~/components/common/errorText';
import { PASSWORD_REGEX } from '~/constants/regex.constants';
import Layout from '~/layouts/Layout';
import ProfilePageFrame from './components/profilePageFrame';

const ChangePasswordPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangePassword = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Đổi mật khẩu</title>
      </Head>
      <Layout categories={props?.categories || []}>
        <ProfilePageFrame>
          <div className="px-[20px]">
            <div className="flex justify-center">
              <div className="">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Đổi mật khẩu
                </h3>
                <form
                  className="max-w-[400px] mt-2"
                  onSubmit={handleSubmit(handleChangePassword)}
                >
                  <div className="">
                    <label htmlFor="oldPassword">Mật khẩu cũ</label>
                    <PasswordInput
                      register={register}
                      name={'oldPassword'}
                      placeholder="Nhập mật khẩu"
                    />
                    {errors?.oldPassword && (
                      <ErrorText text={errors['oldPassword'].message} />
                    )}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="newPassword">Mật khẩu mới</label>
                    <PasswordInput
                      register={register}
                      name={'newPassword'}
                      placeholder="Nhập mật khẩu"
                    />
                    {errors?.newPassword && (
                      <ErrorText text={errors['newPassword'].message} />
                    )}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="confirmPassword">
                      Xác nhận mật khẩu mới
                    </label>
                    <PasswordInput
                      register={register}
                      name={'confirmPassword'}
                      placeholder="Nhập mật khẩu"
                    />
                    {errors?.confirmPassword && (
                      <ErrorText text={errors['confirmPassword'].message} />
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="rounded-lg bg-dark_1 text-white h-12 block w-full"
                    >
                      Xác nhận
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ProfilePageFrame>
      </Layout>
    </>
  );
};

const PasswordInput = ({
  register,
  name,
  placeholder = '',
  validate = {},
}: any) => {
  const [showPass, setShowPass] = React.useState(false);
  const refInput = React.useRef(null);

  const changeState = () => {
    refInput.current.type = showPass ? 'password' : 'text';
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center h-[48px] border border-gray_F1 rounded-xl px-3 ">
      <input
        {...register(name, {
          required: 'Vui lòng nhập mật khẩu',
          pattern: {
            value: PASSWORD_REGEX,
            message: 'Ít nhất 8 ký tự, ít nhất 1 số và 1 chữ cái',
          },
          ...validate,
        })}
        id={name}
        type="password"
        ref={refInput}
        className="h-full px-4 py-2 outline-none"
        placeholder={placeholder}
      />
      <span onClick={changeState}>
        {showPass ? <IconEyeOff /> : <IconEye />}
      </span>
    </div>
  );
};

export default ChangePasswordPage;
