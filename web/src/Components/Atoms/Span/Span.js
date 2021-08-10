import React from 'react';

// STYLES
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
  ${({ theme }) => theme.flex('center', 'center', null)}
  font-size: ${({ size }) => handleFontSize(size)};
`;
