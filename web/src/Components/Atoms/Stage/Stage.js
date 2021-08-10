import React from 'react';

//  STYLES
import styled from 'styled-components';

function Stage() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <StageListBox>
      {arr.map(el => (
        <StageList key={el}>{el}</StageList>
      ))}
    </StageListBox>
  );
}

export default Stage;

const StageListBox = styled.ul`
  padding-left: 0;
`;
const StageList = styled.li`
  list-style: none;
`;
