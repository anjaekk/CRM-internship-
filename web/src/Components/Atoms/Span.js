import React from 'react';

// STYLES
import styled from 'styled-components';

function Span({ children, size, marginSize }) {
  return (
    <SpanEle size={size} marginSize={marginSize}>
      {children}
    </SpanEle>
  );
}

export default Span;

const handleFontSize = size => {
  switch (size) {
    case 'h1':
      return `5rem`;
    case 'h2':
      return '4rem';
    case 'lg':
      return `3rem`;
    case 'mid':
      return '2rem';
    case 'sm':
      return '1rem';
  }
};

const handleMargin = marginSize => {
  switch (marginSize) {
    case 'false':
      return `1rem 0 0`;
      break;
    default:
      return '1rem 0';
  }
};

const SpanEle = styled.span`
  ${({ theme }) => theme.flex('center', 'center', null)}
  font-size: ${({ size }) => handleFontSize(size)};
  margin: ${({ marginSize }) => handleMargin(marginSize)};
`;
