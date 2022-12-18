// import { GetServerSideProps } from 'next';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ProductCard from '~/components/common/productCard';
import Layout from '~/layouts/Layout';
import API from '~/services/axiosClient';
// import paypal from ''
// import { AuthSync } from '~/middlewares/authSync.middleware';
// import { wrapper } from '~/stores';

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
  const router = useRouter()
  const handleCheckout = () => {
    router.push('/thanh-toan/thanh-cong')
  }

  return (
    <Layout>
      <div className="px-[115px] py-[80px]">
        <div className="container flex justify-between items-center gap-[25px] mb-[80px]">
          <div className="left flex-1 self-start">
            <h2 className="font-medium mb-[40px] text-[24px]">
              Billing Details
            </h2>
            <div className="form-gr mb-[30px] relative">
              <label className="text-[14] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input">
                City <span className="text-red">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
            </div>

            <div className="form-gr mb-[30px] relative">
              <label className="text-[14] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input">
                City <span className="text-red">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
            </div>

            <div className="form-gr mb-[30px] relative">
              <label className="text-[14] px-[10px] absolute pointer-events-none top-[-13px] left-[20px] bg-white text-text_input">
                City <span className="text-red">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                className="px-[30px] h-[60px] rounded-[6px] border border-gray_D9 w-full outline-none"
              />
            </div>
          </div>
          <div className="right flex-1 p-[40px] rounded-[6px] bg-checkout_bg">
            <h2 className="mb-[20px] text-[20px] font-medium">Your Order</h2>
            <div className="container rounded-[6px] mb-[45px] p-[30px] bg-white">
              <div className="flex items-center justify-between py-[15px] border-b-[1px] border-b-gray_D9">
                <span className="text-[20px] font-medium">Product</span>
                <span className="text-[20px] font-medium">Subtotal</span>
              </div>

              {cart.map((item: any, index: number) => (
                <div className="flex items-center justify-between py-[15px] border-b-[1px] border-b-gray_D9">
                  <span className="text-[18px]">{item.name}</span>
                  <span className="text-[18px]">{item.price}</span>
                </div>
              ))}

              <div className="flex items-center justify-between py-[15px] border-b-[2px] border-b-gray_D9">
                <span className="text-[18px]">Subtotal</span>
                <span className="text-[18px]">$118.000</span>
              </div>

              <div className="flex items-center justify-between py-[15px] border-b-[2px] border-b-gray_D9">
                <div>
                  <span className="inline-block text-[18px] mb-[10px] ">
                    Shipping Method
                  </span>
                  <div className="input-gr">
                    <div className="flex items-center mb-[5px]">
                      <input
                        checked
                        id="radio1"
                        type="radio"
                        value=""
                        name="default-radio"
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
                        checked
                        id="radio2"
                        type="radio"
                        value=""
                        name="default-radio"
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
                        checked
                        id="radio3"
                        type="radio"
                        value=""
                        name="default-radio"
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
                <span className="text-[20px] font-medium">Total</span>
                <span className="text-[20px] font-medium">$118.000</span>
              </div>
            </div>

            <div className="order wrapper">
              <div className="order1 pb-[20px] mb-[20px] border-b-[1px] border-b-gray_D9">
                <div className="flex items-center mb-[20px]">
                  <input
                    checked
                    id="radio3"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="radio3"
                    className="ml-2 text-[20px] font-medium"
                  >
                    Cash on delivery
                  </label>
                </div>
                <p className="text-[16px] font-[400] text-text_input pl-[28px]">
                  Pay with cash upon delivery.
                </p>
              </div>

              <div className="order1 pb-[20px] mb-[20px] border-b-[1px] border-b-gray_D9">
                <div className="flex justify-between mb-[20px]">
                  <div className="flex items-center">
                    <input
                      checked
                      id="radio3"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="radio3"
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

            <button onClick={handleCheckout} className="text-white bg-blue_00 w-full py-[16px] px-[38px] rounded-[6px] text-[20px] font-medium">
              Process to Checkout
            </button>
          </div>
        </div>

        <div className="containter flex border-b-[1px] border-b-gray_D9 justify-between gap-[80px]">
          <div className="service1 flex items-center mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service1.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className='font-[700]'>Fast & secure Delivery</h6>
              <p className='text-text_input'>Tell about your service.</p>
            </div>
          </div>

          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service2.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className='font-[700]'>Fast & secure Delivery</h6>
              <p className='text-text_input'>Within 10 days.</p>
            </div>
          </div>
          
          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service3.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className='font-[700]'>Fast & secure Delivery</h6>
              <p className='text-text_input'>No question ask.</p>
            </div>
          </div>
          
          <div className="service1 flex items-center  mb-[30px] flex-1">
            <div className="icon mt-[6px] mr-[20px] max-w-[45px]">
              <img src="/assets/icons/service4.png" alt="" />
            </div>
            <div className="content flex flex-col gap-[7px]">
              <h6 className='font-[700]'>Pro Quality Support</h6>
              <p className='text-text_input'>24/7 Live support.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const bestseller = await API.get({ url: '/api/product/list' });
//     return {
//       props: {
//         bestseller: bestseller.data,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };
