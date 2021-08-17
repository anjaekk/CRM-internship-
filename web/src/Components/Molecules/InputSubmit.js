import React from 'react';

// ATOMS
import { Input, Button } from '../../Components/Atoms';

// STYLES
import styled from 'styled-components';

function InputSubmit({ type, placeholder, name }) {
  return (
    <InputSubmitEle>
      <Input type={type} placeholder={placeholder} name={name} />
      <Button bg="comment">submit</Button>
    </InputSubmitEle>
  );
}

export default InputSubmit;

const InputSubmitEle = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
