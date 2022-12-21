import { toast } from 'react-hot-toast';
import { defaultRegistry } from 'react-sweet-state';
import { API_URL } from '~/constants/api.constant';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import { responseHasError } from '~/helpers/base.helper';
import { deleteCookie } from '~/helpers/cookie.helper';
import API, { getAuthHeader } from '~/services/axiosClient';
import { ReturnResponse } from '~/services/response.interface';
import { State } from '.';
import { CartStore } from '../cart';

const cartInstance = defaultRegistry.getStore(CartStore);

type Actions = { setState: any; getState: () => State; dispatch: any };

export const requestProfile = (token?: string) => {
  return async ({ dispatch }: Actions) => {
    try {
      const res = await API.get<ReturnResponse<any>>({
        url: API_URL.PROFILE,
        headers: getAuthHeader(token),
      });
      if (responseHasError(res?.error)) throw Error('Authenticated failed');
      dispatch(setSignedIn(true));
      dispatch(setProfile(res.data));
    } catch (e) {
      dispatch(setSignedIn(false));
      dispatch(setProfile(null));
    }
  };
};

export const logout = (refreshToken: string) => {
  return async ({}: Actions) => {
    try {
      await API.post<ReturnResponse<any>>({
        url: API_URL.LOGOUT,
        body: { refreshToken },
      });

      toast.success('Đã đăng xuất');
      if (window) window.location.href = '/';
      deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
      deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
    } catch (e) {
      toast.error('Có lỗi đăng xuất');
      console.log(`file: authSaga.ts:59 => e logout`, e);
    }
  };
};

export const setSignedIn = (signedIn: boolean) => {
  return async ({ setState }: Actions) => {
    setState({
      signedIn,
    });
  };
};

export const setProfile = (userInfo: any) => {
  return async ({ setState }: Actions) => {
    setState({
      userInfo,
    });
    if (userInfo)
      cartInstance.actions.loadCard({
        cart: userInfo?.cart || [],
        total: userInfo?.cart?.length || 0,
      });
  };
};

export const setFavoriteProducts = (productId: string) => {
  return async ({ setState }: Actions) => {
    // setState({
    //   userInfo,
    // });
    // if (userInfo)
    //   cartInstance.actions.loadCard({
    //     cart: userInfo?.cart || [],
    //     total: userInfo?.cart?.length || 0,
    //   });
  };
};
