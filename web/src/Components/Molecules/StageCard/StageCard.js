import React from 'react';

// ATOMS
import Span from '../../Atoms/Span/Span';
import Stage from '../../Atoms/Stage/Stage';

// STYLES
import styled from 'styled-components';

function StageCard() {
  return (
    <StageCardEle>
      <Span size="big">afsf</Span>
      <Stage />
    </StageCardEle>
  );
}

export default StageCard;

const StageCardEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 20px;
`;
