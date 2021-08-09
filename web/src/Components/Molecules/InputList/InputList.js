import React from 'react';

// ATOMS
import Input from '../../Atoms/Input/Input';

// STYLES
import styled, { css } from 'styled-components';

function InputList({ inputLists }) {
  return (
    <InputListEle>
      {inputLists.map((inputList, i) => {
        return (
          <Input key={i} placeholder={inputList.title} type={inputList.type} />
        );
      })}
    </InputListEle>
  );
}

export default InputList;

const InputListEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
