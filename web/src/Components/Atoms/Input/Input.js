import React from 'react';

// STYLES
import styled, { css } from 'styled-components';

function Input({ placeholder, type }) {
  return (
    <InputEle placeholder={placeholder} type={type ? type : null}></InputEle>
  );
}

export default Input;

const InputEle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 5px;
`;
