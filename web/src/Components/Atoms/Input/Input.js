import React from 'react';

// STYLES
import styled from 'styled-components';

function Input({ placeholder, type, onChange, value }) {
  return (
    <InputEle
      value={value ? value : null}
      placeholder={placeholder}
      type={type ? type : null}
      onChange={onChange ? onChange : null}
    />
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
