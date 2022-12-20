import { IconShoppingCartPlus } from '@tabler/icons';
import Link from 'next/link';
import { formatCurrency2 } from '~/helpers/base.helper';
import FavoriteButton from '../favoriteButton';
import React from 'react';
import styles from './style.module.css';
import { productURL } from '~/helpers/url.helper';
import StarRating from '../starRating';

const ProductCard = (props: any) => {
  const {
    _id,
    name = '',
    sale: salePercent = 0,
    price = 0,
    total_rate = 0,
  } = props;

  const newPrice = React.useMemo(
    () => Math.round(price * (1 - salePercent / 100) * 100) / 100,
    []
  );

  return (
    <div className={styles.product_card}>
      <Link href={productURL(_id)}>
        <a className="">
          <div className="w-full min-h-[200px] max-h-[250px] mb-3">
            <img
              src="/assets/images/product/photo_2022-09-28_21-58-51.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <h3 className={styles.product_name}>{name || '<Chưa cập nhật>'}</h3>
          <div className={styles.box_price}>
            <span className={styles.product__price}>
              {formatCurrency2(newPrice)}
            </span>
            {newPrice > 0 && (
              <span className={styles.product__price__old}>
                {formatCurrency2(price)}
              </span>
            )}
          </div>
        </a>
      </Link>
      <StarRating total_rate={total_rate} />
      <div className={styles.btn_wish_list}>
        <button className="h-[24px] flex gap-x-1 items-center text-[14px] text-[#2f80ed] font-medium">
          <IconShoppingCartPlus stroke={2} size={24} color={'#2f80ed'} />
          <span>Thêm vào giỏ hàng</span>
        </button>
        <FavoriteButton />
      </div>
    </div>
  );
};

export default ProductCard;
