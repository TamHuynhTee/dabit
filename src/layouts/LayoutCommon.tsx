import Link from 'next/link';
import React from 'react';
// import { useInView } from '~/hooks/useInView';
import {
  IconHeart,
  IconHistory,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from '@tabler/icons';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import ModalContainer from '~/components/common/modalContainer';
import ModalLogin from '~/components/modals/loginModal';
import { MODAL_KEYS } from '~/constants/modal.constants';
import { openModalOrDrawer } from '~/helpers/modal.helper';
import CategorySection from './components/CategorySection';
import Footer from './components/footer';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

const LayoutCommon = (props: Props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <header className={`shadow`}>
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
                <div className="px-[10px] h-full">
                  <Flex className="h-full" alignItem="center">
                    <div
                      className={`border border-[#e1e1e1] rounded-tl-[5px] rounded-bl-[5px] border-r-0 px-[10px] w-full h-full relative ${styles.search__input_nav}`}
                    >
                      <input
                        type="text"
                        className="w-full h-full border-none outline-none"
                        placeholder="Bạn đang tìm kiếm gì thế?"
                      />
                      <div className={`${styles.focus__bar}`}></div>
                    </div>
                    <button
                      type="submit"
                      className="h-full px-[20px] bg-dark_3 rounded-tr-[5px] rounded-br-[5px]"
                    >
                      <span>
                        <IconSearch size={16} strokeWidth={2} color={'white'} />
                      </span>
                    </button>
                  </Flex>
                </div>
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
                  <Link href={'#!'}>
                    <a>
                      <IconHeart
                        size={24}
                        strokeWidth={2}
                        color={'black'}
                        className={`${styles.favorite_icon}`}
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
                    <a>
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
                  <Link href={'#!'}>
                    <a>
                      <IconShoppingCart
                        size={24}
                        strokeWidth={2}
                        className={`${styles.cart_icon}`}
                      />
                    </a>
                  </Link>
                </Flex>
              </div>
            </div>
          </div>
        </div>
        {/* Category section */}
        <CategorySection />
      </header>
      {/* body */}
      <main className="container mx-auto px-[20px]">{children}</main>
      {/* footer */}
      <Footer />

      <ModalContainer
        modalKey={MODAL_KEYS.MODAL_LOGIN}
        animation="fade"
        // hideCloseIcon
      >
        <ModalLogin />
      </ModalContainer>
    </React.Fragment>
  );
};

export default LayoutCommon;
