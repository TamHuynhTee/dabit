import React from 'react';
import DrawerContainer from '~/components/common/drawerContainer';
import ModalContainer from '~/components/common/modalContainer';
import { openModalOrDrawer } from '~/helpers/modal.helper';

const Test = () => {
  return (
    <div>
      <button onClick={() => openModalOrDrawer('test_modal')}>Open</button>
      <DrawerContainer drawerKey="test_modal" position="right">
        agwqaga
      </DrawerContainer>
      {/* <ModalContainer modalName="test_modal">agwqaga</ModalContainer> */}
    </div>
  );
};

export default Test;
