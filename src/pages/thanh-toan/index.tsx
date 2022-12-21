import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ErrorText from '~/components/common/errorText';
import PickLocation from '~/components/pages/checkoutPage/components/pickLocation';
import { PHONE_REGEX } from '~/constants/regex.constants';
import Layout from '~/layouts/Layout';
import { getCategories } from '~/services/request';

export default function Checkout(props) {
  const cart = [
    {
      name: 'iphone 14 promax',
      price: '$117.000',
    },
    {
      name: 'iphone 14 promax',
      price: '$117.000',
    },
    {
      name: 'iphone 14 promax',
      price: '$117.000',
    },
  ];

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const handleCheckout = () => {
    router.push('/thanh-toan/thanh-cong');
  };

  return (
    <Layout categories={props?.categories || []}>
      <form className="px-[115px] py-[40px]">
        <div className="container flex justify-between items-center gap-[25px] mb-[80px]">
          <div className="left flex-1 self-start">
            <h2 className="font-medium mb-[40px] text-[24px]">
              Chi tiết đơn hàng
            </h2>
            {/* USER FORM */}

            <div className="mb-[30px] relative">
              <label
                htmlFor="name"
                className="text-[14px] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input"
              >
                Họ tên <span className="text-red">*</span>
              </label>
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Vui lòng nhập họ tên nhận hàng',
                  },
                })}
                id="name"
                type="text"
                placeholder="Nhập họ tên"
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
              {errors?.['name'] && <ErrorText text={errors['name'].message} />}
            </div>

            <div className="mb-[30px] relative">
              <label
                htmlFor="phone"
                className="text-[14px] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input"
              >
                Số điện thoại <span className="text-red">*</span>
              </label>
              <input
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Vui lòng nhập họ tên nhận hàng',
                  },
                  pattern: {
                    value: PHONE_REGEX,
                    message: 'Số điện thoại không đúng định dạng',
                  },
                })}
                id="phone"
                type="text"
                placeholder="Nhập số điện thoại nhận hàng"
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
              {errors?.['phone'] && (
                <ErrorText text={errors['phone'].message} />
              )}
            </div>

            <div className="mb-[20px] flex items-center gap-x-2">
              <span className="text-gray_68 text-[20px] font-medium">
                Địa chỉ
              </span>
              <div className="flex-grow h-[1px] bg-gray_D9"></div>
            </div>

            <PickLocation setValue={setValue} errors={errors} />

            <div className="mb-[30px] relative">
              <label
                htmlFor="address"
                className="text-[14px] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input"
              >
                Địa chỉ cụ thể <span className="text-red">*</span>
              </label>
              <input
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Vui lòng nhập địa chỉ giao hàng',
                  },
                })}
                id="address"
                type="text"
                placeholder="VD: <Số nhà>, <Tên đường>, ..."
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
              {errors?.['address'] && (
                <ErrorText text={errors['address'].message} />
              )}
            </div>

            <div className="mb-[30px] relative">
              <label
                htmlFor="note"
                className="text-[14px] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input"
              >
                Ghi chú
              </label>
              <textarea
                {...register('note')}
                id="note"
                placeholder="Nhập ghi chú"
                rows={5}
                className="px-[30px] pt-2 rounded-[6px] border border-gray_D9 w-full outline-none"
              ></textarea>
            </div>

            {/* // USER FORM */}
          </div>
          <div className="right flex-1 p-[40px] rounded-[6px] bg-checkout_bg">
            <h2 className="mb-[20px] text-[20px] font-medium">Đơn của bạn</h2>
            <div className="container rounded-[6px] mb-[45px] p-[30px] bg-white">
              <div className="flex items-center justify-between py-[15px] border-b-[1px] border-b-gray_D9">
                <span className="text-[20px] font-medium">Sản phẩm</span>
                <span className="text-[20px] font-medium">Tạm tính</span>
              </div>

              {cart.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-[15px] border-b-[1px] border-b-gray_D9"
                >
                  <span className="text-[18px]">{item.name}</span>
                  <span className="text-[18px]">{item.price}</span>
                </div>
              ))}

              <div className="flex items-center justify-between py-[15px] border-b-[2px] border-b-gray_D9">
                <span className="text-[18px]">Tổng tạm tính</span>
                <span className="text-[18px]">$118.000</span>
              </div>

              <div className="flex items-center justify-between py-[15px] border-b-[2px] border-b-gray_D9">
                <div>
                  <span className="inline-block text-[18px] mb-[10px] ">
                    Phương thức giao hàng
                  </span>
                  <div className="input-gr">
                    <div className="flex items-center mb-[5px]">
                      <input
                        id="radio1"
                        type="radio"
                        name="shipping"
                        defaultChecked
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="radio1"
                        className="ml-2 text-[16px] text-text_input"
                      >
                        Free Shipping
                      </label>
                    </div>
                    <div className="flex items-center mb-[5px]">
                      <input
                        id="radio2"
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="radio2"
                        className="ml-2 text-[16px] text-text_input"
                      >
                        Local
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio3"
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="radio3"
                        className="ml-2 text-[16px] text-text_input"
                      >
                        Flat rate
                      </label>
                    </div>
                  </div>
                </div>
                <span className="text-[18px]">$35.000</span>
              </div>

              <div className="flex items-center justify-between py-[15px]">
                <span className="text-[20px] font-medium">Tổng thanh toán</span>
                <span className="text-[20px] font-medium">$118.000</span>
              </div>
            </div>

            <div className="order wrapper">
              <div className="order1 pb-[20px] mb-[20px] border-b-[1px] border-b-gray_D9">
                <div className="flex items-center mb-[20px]">
                  <input
                    defaultChecked
                    id="cod"
                    type="radio"
                    name="payment"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="cod" className="ml-2 text-[20px] font-medium">
                    COD
                  </label>
                </div>
                <p className="text-[16px] font-[400] text-text_input pl-[28px]">
                  Trả tiền khi nhận hàng.
                </p>
              </div>

              <div className="order1 pb-[20px] mb-[20px] border-b-[1px] border-b-gray_D9">
                <div className="flex justify-between mb-[20px]">
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      type="radio"
                      name="payment"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-2 text-[20px] font-medium"
                    >
                      Paypal
                    </label>
                  </div>
                  <img
                    src="/assets/images/paypal.png"
                    alt=""
                    className="w-[100px] h-[25px] object-cover"
                  />
                </div>

                <p className="text-[16px] font-[400] text-text_input pl-[28px]">
                  Pay via PayPal; you can pay with your credit card if you don’t
                  have a PayPal account.
                </p>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="text-white bg-blue_00 w-full py-[16px] px-[38px] rounded-[6px] text-[20px] font-medium"
            >
              Tiến hành thanh toán
            </button>
          </div>
        </div>

        <div className="containter flex border-b-[1px] border-b-gray_D9 justify-between gap-[80px]">
          <div className="service1 flex items-center mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service1.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className="font-[700]">Fast & secure Delivery</h6>
              <p className="text-text_input">Tell about your service.</p>
            </div>
          </div>

          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service2.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className="font-[700]">Fast & secure Delivery</h6>
              <p className="text-text_input">Within 10 days.</p>
            </div>
          </div>

          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service3.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className="font-[700]">Fast & secure Delivery</h6>
              <p className="text-text_input">No question ask.</p>
            </div>
          </div>

          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service4.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className="font-[700]">Pro Quality Support</h6>
              <p className="text-text_input">24/7 Live support.</p>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    const categories = await getCategories();
    //   const productInfo = await API.get<ReturnResponse<any>>({
    //     url: API_URL.CATEGORY_READ,
    //     params: { ...query },
    //   });

    const data = await Promise.all([categories]);

    return {
      props: {
        categories: data?.[0]?.data,
        //   cateInfo: data?.[1]?.data,
      },
    };
  } catch (error) {
    console.log(`file: index.tsx:70 => error`, error);
    return {
      notFound: true,
    };
  }
};
