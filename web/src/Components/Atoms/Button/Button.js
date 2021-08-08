import React, { Children } from 'react';
import { Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Button({ children, bg, padding }) {
  return (
    <ButtonEle bg={bg} padding={padding}>
      {children}
    </ButtonEle>
  );
}

export default Button;

const handlePadding = padding => {
  switch (padding) {
    case 'big':
      return `1.5rem 2rem`;
    case 'mid':
      return `1rem 1.5rem`;
    case 'sm':
      return `0.5rem 1rem`;
  }
};

const handleBg = bg => {
  switch (bg) {
    case 'admin':
      return 'red';
    case 'calender':
      return 'blue';
    case 'stage':
      return 'yellow';
    case 'status':
      return 'black';
  }
};

const ButtonEle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ bg }) => (bg ? handleBg(bg) : 'transparent')};
  padding: ${({ padding }) => handlePadding(padding)};
`;
