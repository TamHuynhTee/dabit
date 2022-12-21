import Link from 'next/link';
import React from 'react';
import Divider from '~/components/common/divider';
import useCartHook from '~/hooks/useCartHook';

// type Props = {}

const DrawerCart = () => {
  const { cartCount } = useCartHook();
  return (
    <div className="mt-3">
      <Link href={'/gio-hang'}>
        <a className="text-[18px] font-bold">Giỏ hàng ({cartCount})</a>
      </Link>
      <Divider className="h-[1px] my-[10px]" />
    </div>
  );
};

export default DrawerCart;
