import React from 'react';

// LIBRARY
import Modal from 'react-modal';

// TEMPLETE
import Templete from './Templete/index';

// STYLES
import styled from 'styled-components';

Modal.setAppElement('#root');

function index() {
  return (
    <CalendarEle>
      <Templete />
    </CalendarEle>
  );
}

export default index;

const CalendarEle = styled.div`
  position: relative;
  z-index: 0;
`;
