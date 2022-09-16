import Link from 'next/link';
import React from 'react';
// import { useInView } from '~/hooks/useInView';
import {
  IconPhone,
  IconMailForward,
  IconSearch,
  IconUserCircle,
  IconHeart,
  IconShoppingCart,
  IconHistory,
  IconMenu2,
  IconChevronRight,
  IconMouse2,
  IconArrowNarrowRight,
} from '@tabler/icons';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import styles from './layout.module.css';
import Divider from '~/components/common/divider';
import { CATEGORIES, ICategory } from '~/dumps/categories';
import Footer from './components/footer';
import ModalContainer from '~/components/common/modalContainer';
import ModalLogin from '~/components/modals/loginModal';
import { MODAL_KEYS } from '~/constants/modal.constants';
import { openModal } from '~/helpers/modal.helper';

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
                      onClick={() => openModal(MODAL_KEYS.MODAL_LOGIN)}
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
        modalName={MODAL_KEYS.MODAL_LOGIN}
        animation="fade"
        // hideCloseIcon
      >
        <ModalLogin />
      </ModalContainer>
    </React.Fragment>
  );
};

const CategorySection = () => {
  React.useEffect(() => {
    const _toggle = document.querySelector(`.${styles.all_categories__toggle}`);
    const _panel = document.querySelector(`.${styles.all_categories__panel}`);

    const handleShowPanel = () => {
      _panel.classList.add(`${styles.show}`);
    };
    const handleHidePanel = () => {
      _panel.classList.remove(`${styles.show}`);
    };
    _toggle.addEventListener('mouseover', handleShowPanel);
    _toggle.addEventListener('mouseout', handleHidePanel);

    return () => {
      _toggle.removeEventListener('mouseover', handleShowPanel);
      _toggle.removeEventListener('mouseout', handleHidePanel);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="container pb-[10px] px-[20px]">
        <Divider className="h-[1px]" />
        <div className="mt-[10px] grid grid-cols-12 gap-1 h-[40px] [&>*]:h-full">
          {/* all cates */}
          <div className="col-span-2">
            <Flex
              alignItem="center"
              className={`h-full gap-2 justify-center rounded-[5px] cursor-pointer relative ${styles.all_categories__toggle} bg-dark_3`}
            >
              <Flex alignItem="center" className="gap-2 justify-center">
                <span>
                  <IconMenu2 size={24} strokeWidth={2} color={'white'} />
                </span>
                <span className="text-[#fff]">Tất cả</span>
              </Flex>
              {/* all cates panel */}
              <AllCatePanel />
            </Flex>
          </div>
          {CATEGORIES.map((cate, cateIndex) => (
            <div className="col-span-2" key={cateIndex}>
              <Flex
                alignItem="center"
                className={`h-full transition duration-200 ease-in gap-2 justify-center rounded-[5px] cursor-pointer bg-[#fffd7f] hover:bg-[#fff] hover:border-2 hover:border-[#000]`}
              >
                <span>{cate.icon}</span>
                <span className="text-[#000]">{cate.nameCate}</span>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const subCateLengthWithBanner = 3;
const subCateLengthWithoutBanner = 5;

const AllCatePanel = () => {
  const [cate, setCate] = React.useState<ICategory>(undefined);

  const renderSubMenu = (length: number) => {
    return cate.subCate.length > 0 ? (
      [...Array(length)].map((_, _cateIndex) => {
        return (
          <div className="col-span-1 justify-self-center" key={_cateIndex}>
            <Link href={`#!`}>
              <a className="font-bold !text-black">
                {cate.subCate[_cateIndex]?.nameCate}
              </a>
            </Link>
            {cate.subCate[_cateIndex]?.subCate.length > 0 && (
              <ul>
                {cate.subCate[_cateIndex]?.subCate.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link href={`#!`}>
                      <a className="!text-black">{sub?.nameCate}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {_cateIndex === length - 1 && (
              <Link href={`#!`}>
                <a className="flex items-center gap-1 !text-[#0000ee]">
                  Xem tất cả{' '}
                  <IconArrowNarrowRight
                    size={20}
                    color={'#0000ee'}
                    stroke={2}
                  />
                </a>
              </Link>
            )}
          </div>
        );
      })
    ) : (
      <Flex className={`col-span-1 items-center justify-center`}>
        <Link href={`#!`}>
          <a className="flex items-center gap-1 !text-[#0000ee]">
            Xem tất cả{' '}
            <IconArrowNarrowRight size={20} color={'#0000ee'} stroke={2} />
          </a>
        </Link>
      </Flex>
    );
  };

  return (
    <div
      className={`${styles.all_categories__panel}`}
      id="all_categories__panel"
    >
      <div className="grid grid-cols-5">
        <div className="col-span-1 bg-[#fffd7f] rounded-tl-[5px] rounded-bl-[5px]">
          <ul>
            {CATEGORIES.map((_cate, cateIndex) => (
              <li
                className="col-span-2 p-[10px] first:rounded-tl-[5px] last:rounded-bl-[5px] hover:bg-[#fff]"
                key={cateIndex}
                onMouseEnter={() => setCate(_cate)}
              >
                <Flex
                  alignItem="center"
                  className={`h-full gap-2 justify-between`}
                >
                  <Flex alignItem="center" className="gap-2">
                    <span>{_cate.icon}</span>
                    <span className="text-[#000]">{_cate.nameCate}</span>
                  </Flex>
                  <IconChevronRight size={20} strokeWidth={2} color={'#000'} />
                </Flex>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-4 p-[10px] cursor-default">
          {cate ? (
            <div className="grid grid-cols-5 gap-5 h-full">
              {cate.cateBanner ? (
                <>
                  {renderSubMenu(subCateLengthWithBanner)}
                  <div className="col-span-2">
                    <ImageRender
                      src={cate.cateBanner}
                      alt="logo"
                      className="h-full w-full"
                    />
                  </div>
                </>
              ) : (
                renderSubMenu(subCateLengthWithoutBanner)
              )}
            </div>
          ) : (
            <Flex
              alignItem="center"
              justifyContent="center"
              className="w-full h-full gap-2"
            >
              <IconMouse2 size={24} strokeWidth={2} color={'#a1a1a1'} />
              <span className="text-[20px] text-[#a1a1a1] font-bold">
                Di chuột vào các loại sản phẩm bên trái để hiển thị thêm
              </span>
            </Flex>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactLink = ({
  href,
  icon,
  content,
}: {
  href: string;
  icon: React.ReactNode;
  content: string;
}) => {
  return (
    <a href={href}>
      <span className="flex items-center gap-1">
        {icon}
        <span className="text-black font-bold text-[14px] leading-4">
          {content}
        </span>
      </span>
    </a>
  );
};

export default LayoutHome;
