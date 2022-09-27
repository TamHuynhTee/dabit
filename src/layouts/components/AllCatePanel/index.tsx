import {
  IconArrowNarrowRight,
  IconChevronRight,
  IconMouse2,
} from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import Flex from '~/components/common/flex';
import ImageRender from '~/components/common/imageRender';
import { CATEGORIES, ICategory } from '~/dumps/categories';
import styles from '../../layout.module.css';

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

export default AllCatePanel;
