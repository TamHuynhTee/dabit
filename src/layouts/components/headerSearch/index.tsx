import { IconSearch } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import Flex from '~/components/common/flex';
import useDebounce from '~/hooks/useDebounce';
import styles from '../../layout.module.css';

// type Props = {}

const HeaderSearch = () => {
  const [dataSearch, setDataSearch] = React.useState<any[]>([]);

  const onSearch = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      if (dataSearch.length) setDataSearch([]);
      return;
    }
    fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then((res) => res.json())
      .then((res) => setDataSearch(res.products));
  }, 300);

  return (
    <form className="px-[10px] h-full">
      <Flex className="h-full" alignItem="center">
        <div
          className={`px-[10px] w-full h-full relative ${styles.search__input_nav}`}
        >
          <input
            type="text"
            className="w-full h-full border-none outline-none"
            placeholder="Bạn đang tìm kiếm gì thế?"
            onChange={onSearch}
          />
          <div className={`${styles.focus__bar}`}></div>
          {dataSearch.length > 0 && (
            <div className={styles.search__result_table}>
              <ul>
                {dataSearch.map((e) => (
                  <li key={e.id} className="my-[10px]">
                    <SearchItem {...e} />
                  </li>
                ))}
              </ul>
            </div>
          )}
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
    </form>
  );
};

const SearchItem = (props: any) => {
  return (
    <div className={styles.search__result_item}>
      <div className="w-full h-[100px] col-span-1 rounded-md bg-gray_D9">
        <img
          src={props.thumbnail}
          alt="result"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full col-span-1 flex flex-col">
        <Link href="#!">
          <a className=" font-semibold max_line-1">{props.title}</a>
        </Link>
        <p className="font-normal text-sm h-[40px] max_line-2">
          {props.description}
        </p>
        <p className="mt-auto text-dark_3 text-lg font-medium">
          {props.price} VND
        </p>
      </div>
    </div>
  );
};

export default HeaderSearch;
