import React from 'react';
import useAuth from '~/stores/auth';

export default function AuthSync({ children }: any) {
  const [, { requestProfile }] = useAuth();

  React.useEffect(() => {
    requestProfile();
  }, []);

  return children;
}
