import React from 'react';

// STYLES
import styled from 'styled-components';

function Priority({ arr }) {
  return <PriorityEle>level1</PriorityEle>;
}

export default Priority;

const PriorityEle = styled.div`
  width: 35px;
  padding: 2.5px 1rem;
  background-color: red;
  color: #fff;
  border-radius: 80px;
`;
