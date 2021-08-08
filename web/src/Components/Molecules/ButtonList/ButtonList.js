import React from 'react';
import styled from 'styled-components';

import Button from '../../Atoms/Button/Button';

function ButtonList({ buttonLists }) {
  return (
    <ButtonListEle>
      {buttonLists.map((buttonList, i) => {
        return (
          <Button key={i} padding="sm">
            {buttonList.title}
          </Button>
        );
      })}
    </ButtonListEle>
  );
}

export default ButtonList;

const ButtonListEle = styled.div`
  display: flex;
  justify-content: center;
`;
