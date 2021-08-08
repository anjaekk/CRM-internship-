import React from 'react';
import styled, { css } from 'styled-components';
import Option from '../Option/Option';

function Select({ selects, name, size }) {
  return (
    <SelectEle name={name} size={size}>
      <Option selects={selects} />
    </SelectEle>
  );
}

export default Select;

const handleSize = size => {
  switch (size) {
    case 'big':
      return `1rem`;
    case 'mid':
      return `0.5rem`;
    case 'sm':
      return `0.2rem`;
  }
};

const SelectEle = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: ${({ size }) => handleSize(size)};
`;
