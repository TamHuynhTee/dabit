import { IconMenu2 } from '@tabler/icons';
import React from 'react';
import Divider from '~/components/common/divider';
import Flex from '~/components/common/flex';
import { CATEGORIES } from '~/dumps/categories';
import AllCatePanel from '../AllCatePanel';
import styles from '../../layout.module.css';

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

export default CategorySection;
