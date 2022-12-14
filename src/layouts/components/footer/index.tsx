import Link from 'next/link';
import Flex from '~/components/common/flex';
import { DateJS } from '~/helpers/date.helper';

const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* main content footer */}
      <section className="bg-[#fffd7f]">
        <div className="container mx-auto">
          <div className="py-[5px] px-[20px]">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <h5 className="font-medium text-[20px]">Sản phẩm</h5>
                <ul className="mt-[8px]">
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Điện thoại</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Laptop</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Tablet</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Máy để bàn</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Đồng hồ</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className="font-medium text-[20px]">Dịch vụ</h5>
                <ul className="mt-[8px]">
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Đóng tiền</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Internet</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Nạp thẻ</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Mua vé tàu</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Sim số</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className="font-medium text-[20px]">Chính sách</h5>
                <ul className="mt-[8px]">
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Chính sách giao hàng</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Chính sách mua hàng</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Chính sách đổi trả</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Chính sách bảo hành</a>
                    </Link>
                  </li>
                  <li className="my-[8px]">
                    <Link href="#!">
                      <a className="text-black">Chính sách thu mua</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className="font-medium text-[20px]">Liên hệ</h5>
                <div className="mt-[8px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bottom footer */}
      <section className="bg-dark_3">
        <div className="container mx-auto">
          <div className="py-[5px] px-[20px]">
            <Flex alignItem="center" justifyContent="center">
              <span className="text-white text-[14px]">
                © {DateJS.getYear()} Dabit Electronic. All rights reserved.
              </span>
            </Flex>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
