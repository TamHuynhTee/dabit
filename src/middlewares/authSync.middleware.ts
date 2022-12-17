import React from 'react';
import { useDispatch } from 'react-redux';
import { requestProfile } from '~/stores/auth/authSaga';

export default function AuthSync({ children }: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestProfile());
  }, []);

  return children;
}
