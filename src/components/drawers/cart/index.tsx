import React from 'react';
import Divider from '~/components/common/divider';
import useCartHook from '~/hooks/useCart';

// type Props = {}

const DrawerCart = () => {
  const { cartCount } = useCartHook();
  return (
    <div className="mt-3">
      <p className="text-[18px] font-bold">Giỏ hàng ({cartCount})</p>
      <Divider className="h-[1px] my-[10px]" />
    </div>
  );
};

export default DrawerCart;
