import React from 'react';

// TEMPLETE
import Templete from './Templetes/index';

function index() {
  let arr = {
    thead: ['순서', '회사', '이름', '부서/직책', '이메일', '연락처'],
    tbody: {
      row: ['row1', 'row2', 'row3', 'row4'],
      col: ['순서', 'con2', 'con3', 'con4', 'con5', 'con6'],
    },
  };

  return <Templete arr={arr} />;
}

export default index;
