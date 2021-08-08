import React from 'react';

import Modal from 'react-modal';
import Calendar from '../../Components/Atoms/Calendar/Calendar';
Modal.setAppElement('#root');

function index() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default index;
