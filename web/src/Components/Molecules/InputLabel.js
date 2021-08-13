import React from 'react';

import { Input, Label } from '../Atoms';

import styled from 'styled-components';

function InputLabel({ children, type, placeholder, name, onChange, value }) {
  return (
    <InputLabelEle>
      <Label>{children}</Label>
      <Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value ? value : null}
      />
    </InputLabelEle>
  );
}

export default InputLabel;

const InputLabelEle = styled.div`
  width: 100%;
  margin-top: 10px;
`;
