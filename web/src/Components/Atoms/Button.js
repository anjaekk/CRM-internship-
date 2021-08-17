import React from 'react';

// 아직 크기, 색상 등등 스타일속성 조건별로 더 해야함

// STYLES
import styled, { css } from 'styled-components';

function Button({ bg, children, onClick, onEventAdded }) {
  return (
    <ButtonEle onClick={onClick} bg={bg}>
      {children}
    </ButtonEle>
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
        background-color: #ccc;
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

const ButtonEle = styled.button`
  ${({ theme }) => theme.flex('center', 'center', null)}
  ${({ bg }) => buttonType(bg)}
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rebeccapurple;
  }
`;
