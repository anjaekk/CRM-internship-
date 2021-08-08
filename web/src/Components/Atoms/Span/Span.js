import React from 'react';
import styled, { css } from 'styled-components';

function Span({ children, size }) {
  return <SpanEle size={size}>{children}</SpanEle>;
}

export default Span;

const handleFontSize = size => {
  switch (size) {
    case 'h1':
      return `5rem`;
    case 'h2':
      return '4rem';
    case 'big':
      return `2rem`;
    case 'mi':
      return '18px';
    case 'sm':
      return '15px';
  }
};

const SpanEle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => handleFontSize(size)};
`;
