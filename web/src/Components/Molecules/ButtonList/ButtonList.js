import React from 'react';

// ATOMS
import Button from '../../Atoms/Button/Button';

// STYLES
import styled from 'styled-components';

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
