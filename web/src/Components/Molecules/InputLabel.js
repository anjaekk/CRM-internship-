import React from 'react';

import { Input, Label } from '../Atoms';

import styled from 'styled-components';

function InputLabel({ children, type, placeholder, name, onChange, value }) {
  return (
    <InputLabelElement>
      <Label>{children}</Label>
      <Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value ? value : null}
      />
    </InputLabelElement>
  );
}

export default InputLabel;

const InputLabelElement = styled.div`
  width: 100%;
  margin-top: 10px;
`;
