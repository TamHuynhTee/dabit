import React from 'react';
import { getCookie } from '~/helpers/cookie.helper';
import { setFavorites } from '~/stores/auth/authSaga';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthState } from '~/stores/auth/authSlice';
import { COOKIE_KEYS } from '~/constants/cookie.constants';

const useFavorite = () => {
  const profileInfo = useSelector(selectAuthState)?.userInfo;
  const dispatch = useDispatch();

  const isFavoriteProduct = React.useCallback(
    (id: string) => {
      return false; // !!profileInfo?.favoriteWines?.[id];
    },
    [profileInfo]
  );

  const handleCreateFavorite = React.useCallback((e, id) => {
    e.preventDefault();
    try {
      const access_token = getCookie(COOKIE_KEYS.ACCESS_TOKEN);
      if (!access_token) throw new Error();
      dispatch(setFavorites(access_token, id));
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isFavoriteProduct,
    handleCreateFavorite,
  };
};

export default useFavorite;
