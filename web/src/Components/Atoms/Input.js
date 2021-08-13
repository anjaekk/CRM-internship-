import React from 'react';

// STYLES
import styled from 'styled-components';

function Input({ type, placeholder, name, onChange, value }) {
  return (
    <InputEle
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      name={name}
      value={value ? value : null}
    />
  );
}

export default Input;

const InputEle = styled.input`
  ${({ theme }) => theme.flex('center', 'center', null)}
  width: 95%;
  margin-top: 5px;
  padding: 0.5em 0 0.5em 1rem;
  color: #696969;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  outline: none;

  &::placeholder {
    color: #696969;
    font-size: 0.9rem;
  }
`;
