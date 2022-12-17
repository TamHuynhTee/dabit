import authSaga from './auth/authSaga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([authSaga()]);
}
