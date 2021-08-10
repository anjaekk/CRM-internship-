import React from 'react';

// ATOMS
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

// STYLES
import styled from 'styled-components';

function InputSubmit() {
  return (
    <InputSubmitEle>
      <Input />
      <Button padding="sm">hihi</Button>
    </InputSubmitEle>
  );
}

export default InputSubmit;

const InputSubmitEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
