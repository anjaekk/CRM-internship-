import React from 'react';
import StageCard from '../../Molecules/StageCard/StageCard';

import styled from 'styled-components';

function StageCardList() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <StageCardListEle>
      {arr.map(el => {
        return <StageCard key={el} />;
      })}
    </StageCardListEle>
  );
}

export default StageCardList;

const StageCardListEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
