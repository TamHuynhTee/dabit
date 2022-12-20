import { IconHeart } from '@tabler/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import useFavorite from '~/hooks/useFavorite';
import { selectAuthState } from '~/stores/auth/authSlice';

const iconProps = {
  stroke: 2,
  size: 24,
  color: '#FF3737',
  className: 'cursor-pointer hover:scale-110',
};

const FavoriteButton = (props) => {
  const { handleCreateFavorite, isFavoriteProduct } = useFavorite();
  const isAuthenticated = useSelector(selectAuthState);
  const productId = props?.productId || '';
  const containerClass = props?.containerClass || 'favorite';

  if (!isAuthenticated) return <></>;

  return (
    <div
      className={containerClass}
      onClick={(e) => handleCreateFavorite(e, productId)}
    >
      {isFavoriteProduct(productId) ? (
        <IconHeart {...iconProps} fill={'#FF3737'} />
      ) : (
        <IconHeart {...iconProps} fill={'#fff'} />
      )}
    </div>
  );
};

export default React.memo(FavoriteButton);
