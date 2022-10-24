import Link from 'next/link';
import React from 'react';
import {
  //   IconHeart,
  IconHistory,
  IconMailForward,
  IconPhone,
  IconShoppingCart,
  IconTruckDelivery,
  IconUserCircle,
} from '@tabler/icons';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import ModalContainer from '~/components/common/modalContainer';
import ModalLogin from '~/components/modals/loginModal';
import { DRAWER_KEYS, MODAL_KEYS } from '~/constants/modal.constants';
import { openModalOrDrawer } from '~/helpers/modal.helper';
import CategorySection from './components/CategorySection';
import Footer from './components/footer';
import styles from './layout.module.css';
import ContactLink from './components/ContactLink';
import DrawerContainer from '~/components/common/drawerContainer';
import DrawerCart from '~/components/drawers/cart';
import HeaderSearch from './components/headerSearch';
import ModalRegister from '~/components/modals/registerModal';

type Props = {
  children: React.ReactNode;
};

const LayoutHome = (props: Props) => {
  const { children } = props;

  //   const isIntersecting = useInView(loadingElement, {
  //     threshold: 1,
  //     rootMargin: "150px"
  //   });

  return (
    <React.Fragment>
      <header className={`shadow`}>
        <div className="bg-[#fffd7f]">
          <Flex
            alignItem="center"
            className="gap-3 justify-end container mx-auto py-[5px] px-[20px]"
          >
            <ContactLink
              href="tel: 0347933844"
              icon={<IconPhone size={16} strokeWidth={2} color={'black'} />}
              content="0347 933 xxx"
            />
            <ContactLink
              href="mailto: huynhthanhtam2605@gmail.com"
              icon={
                <IconMailForward size={16} strokeWidth={2} color={'black'} />
              }
              content="xxx@gmail.com"
            />
          </Flex>
        </div>
        {/* Main header */}
        <div className="bg-white">
          <div className="container mx-auto py-[5px] px-[20px]">
            <div className="grid grid-cols-12 gap-1 h-[40px] [&>*]:h-full">
              {/* Logo */}
              <Flex alignItem="center" className="col-span-1 justify-start">
                <Link href={'/'}>
                  <a>
                    <ImageRender
                      src="/nobida_logo.png"
                      alt="logo"
                      className="h-full w-[40px]"
                    />
                  </a>
                </Link>
              </Flex>
              {/* Search */}
              <div className="col-span-7">
                <HeaderSearch />
              </div>
              {/* User */}
              <div className="col-span-2">
                <div className="grid grid-cols-[24px_1fr] items-center h-full gap-2">
                  <div className="justify-self-center">
                    <IconUserCircle size={24} strokeWidth={2} color={'black'} />
                  </div>
                  <div className="justify-self-center">
                    <button
                      onClick={() => openModalOrDrawer(MODAL_KEYS.MODAL_LOGIN)}
                      className="inline-block text-[14px] leading-4 cursor-pointer"
                    >
                      Đăng nhập/Tạo tài khoản
                    </button>
                  </div>
                </div>
              </div>
              {/* Favorite */}
              <div className="col-span-2 grid grid-cols-3">
                <Flex
                  alignItem="center"
                  justifyContent="center"
                  className="col-span-1"
                >
                  <Link href={'/kiem-tra-don-hang'}>
                    <a title="Kiểm tra đơn hàng">
                      <IconTruckDelivery
                        size={24}
                        strokeWidth={2}
                        className={`${styles.checkOrder_icon}`}
                      />
                    </a>
                  </Link>
                </Flex>
                {/* History */}
                <Flex
                  alignItem="center"
                  justifyContent="center"
                  className="col-span-1"
                >
                  <Link href={'#!'}>
                    <a title="Lịch sử mua hàng">
                      <IconHistory
                        size={24}
                        strokeWidth={2}
                        className={`${styles.history_icon}`}
                      />
                    </a>
                  </Link>
                </Flex>
                {/* Cart */}
                <Flex
                  alignItem="center"
                  justifyContent="center"
                  className="col-span-1"
                >
                  <button
                    onClick={() => openModalOrDrawer(DRAWER_KEYS.DRAWER_CART)}
                  >
                    <IconShoppingCart
                      size={24}
                      strokeWidth={2}
                      className={`${styles.cart_icon}`}
                    />
                  </button>
                </Flex>
              </div>
            </div>
          </div>
        </div>
        {/* Category section */}
        <CategorySection />
      </header>
      {/* body */}
      <main className="container mx-auto my-5 px-[20px]">{children}</main>
      {/* footer */}
      <Footer />

      <ModalContainer modalKey={MODAL_KEYS.MODAL_LOGIN} animation="fade">
        <ModalLogin />
      </ModalContainer>
      <ModalContainer modalKey={MODAL_KEYS.MODAL_REGISTER} animation="fade">
        <ModalRegister />
      </ModalContainer>
      <DrawerContainer drawerKey={DRAWER_KEYS.DRAWER_CART}>
        <DrawerCart />
      </DrawerContainer>
    </React.Fragment>
  );
};

export default LayoutHome;
