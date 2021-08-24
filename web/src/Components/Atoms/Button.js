import React from 'react';

// STYLES
import styled, { css } from 'styled-components';

function Button({ bg, children, onClick }) {
  return (
    <ButtonElement onClick={onClick} bg={bg}>
      {children}
    </ButtonElement>
  );
}

export default Button;

const buttonType = bg => {
  switch (bg) {
    case 'admin':
      return css`
        width: 100%;
        padding: 1rem 2rem;
        background-color: #ccc;
        color: #fff;
        font-size: 1rem;

        &:hover {
          background-color: rebeccapurple;
        }
      `;
      break;
    case 'comment':
      return css`
        padding: 0.5rem;
        background-color: rebeccapurple;
        color: #fff;
        font-size: 1rem;
      `;
      break;
    case 'schedule':
      return css`
        width: 100%;
        padding: 1rem 2rem;
        background-color: rebeccapurple;
        color: #fff;
        font-size: 1rem;
      `;
      break;
    default:
      return css`
        padding: 0.5rem;
        background-color: rebeccapurple;
        color: #fff;
        font-size: 1rem;
      `;
  }
};

const ButtonElement = styled.button`
  ${({ theme }) => theme.flex('center', 'center', null)}
  ${({ bg }) => buttonType(bg)}
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;
