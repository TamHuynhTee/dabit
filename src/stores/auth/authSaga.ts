import toast from 'react-hot-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL } from '~/constants/api.constant';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import { responseHasError } from '~/helpers/base.helper';
import { deleteCookie } from '~/helpers/cookie.helper';
import API, { getAuthHeader } from '~/services/axiosClient';
import { setSignedIn, setFavoriteProducts, setProfile } from './authSlice';

export const requestProfile = (token?) => ({
  type: 'USER_FETCH_REQUESTED',
  token,
});

export const requestLogout = (refreshToken: string) => ({
  type: 'USER_LOG_OUT',
  refreshToken,
});

// export const setUserProfile = (token, data) => ({
//   type: 'USER_CHANGE_PROFILE',
//   token,
//   data,
// });

export const setFavorites = (token, productId) => ({
  type: 'USER_SET_FAVORITES_REQUEST',
  token,
  productId,
});

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(actions) {
  const { token } = actions;
  try {
    const res = yield call(API.get, {
      url: API_URL.PROFILE,
      headers: getAuthHeader(token),
    });
    if (responseHasError(res?.error)) throw Error('Authenticated failed');
    yield put(setSignedIn(true));
    yield put(setProfile(res.data));
  } catch (e) {
    yield put(setSignedIn(false));
    yield put(setProfile(null));
  }
}

function* logoutSaga(actions) {
  const { refreshToken } = actions;
  try {
    yield call(API.post, {
      url: API_URL.LOGOUT,
      body: { refreshToken },
    });
    toast.success('Đã đăng xuất');
    if (window) window.location.href = '/';

    deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
    deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);

    // yield put(setSignedIn(false));
    // yield put(setProfile(null));
  } catch (e) {
    toast.error('Có lỗi đăng xuất');
    console.log(`file: authSaga.ts:59 => e logout`, e);
  }
}

// function* changeProfileSaga(action) {
//   try {
//     const { token, data } = action;
//     const result = yield call(
//       API.put,
//       PROFILE,
//       data,
//       {},
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     );
//     if (responseHasError(result.data.error)) throw Error(result.data.message);
//     yield put(setProfile(result.data.data || {}));
//     toast.success('Cập nhật thành công');
//   } catch (e) {
//     yield put(setProfile(null));
//     toast.error(error?.data?.message || error?.message);
//   }
// }

// function* setFavoritesSaga(action) {
//   try {
//     const { token, productId } = action;

//     const result = yield call(
//       API.postNoFormData,
//       FAVORITES,
//       {
//         favoriteWine: productId,
//       },
//       {},
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     );
//     if (responseHasError(result.data.error)) throw Error('Có lỗi xảy ra');
//     yield put(setFavoriteProducts(result.data.data.favoriteWine));
//   } catch (e) {
//     console.log(`file: authSaga.js:81 => e`, e);
//     toast.error(e?.message || e?.data?.message);
//   }
// }

function* authSaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
  yield takeLatest('USER_LOG_OUT', logoutSaga);
  //   yield takeLatest('USER_CHANGE_PROFILE', changeProfileSaga);
  //   yield takeLatest('USER_SET_FAVORITES_REQUEST', setFavoritesSaga);
}

export default authSaga;
