import React from 'react';
import ModalContainer from '~/components/common/modalContainer';
import { openModal } from '~/helpers/modal.helper';

const Test = () => {
  return (
    <div>
      <button onClick={() => openModal('test_modal')}>Open</button>
      <ModalContainer modalName="test_modal">agwqaga</ModalContainer>
    </div>
  );
};

export default Test;
