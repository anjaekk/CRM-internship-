import React from 'react';
import styled, { css } from 'styled-components';

function Input({ placeholder, type }) {
  return <InputEle placeholder={placeholder} type={type}></InputEle>;
}

export default Input;

const InputEle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 5px;
`;
