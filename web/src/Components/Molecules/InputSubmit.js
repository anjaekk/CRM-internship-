import React from 'react';

// ATOMS
import { Input, Button } from '../../Components/Atoms';

// STYLES
import styled from 'styled-components';

function InputSubmit({ type, placeholder, name }) {
  return (
    <InputSubmitElement>
      <Input type={type} placeholder={placeholder} name={name} />
      <Button bg="comment">submit</Button>
    </InputSubmitElement>
  );
}

export default InputSubmit;

const InputSubmitElement = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  width: 100%;
`;
