import React from 'react';

// ATOMS, MOLECULES
import { Span } from '../../Components/Atoms';
import { InputSubmit } from '../../Components/Molecules';

// STYLES
import styled from 'styled-components';

function CommentBox({ size, children }) {
  return (
    <CommentBoxEle size={size}>
      <Top>
        <Span size="sm">Comments</Span>
        <CommnetWrap>{children}</CommnetWrap>
      </Top>
      <InputSubmit
        type="text"
        placeholder="enter your comments"
        name="comment"
      />
    </CommentBoxEle>
  );
}

export default CommentBox;

const boxSize = size => {
  switch (size) {
    case 'lg':
      return '100%';
      break;
    case 'mid':
      return '50%';
      break;
    case 'sm':
      return null;
      break;
    default:
      return null;
  }
};

const CommentBoxEle = styled.div`
  ${({ theme }) => theme.flex('space-between', 'center', 'column')}
  width: ${({ size }) => boxSize(size)};
  height: 300px;
  border: 1px solid #ccc;
  margin: 1rem 0;
`;

const Top = styled.div`
  width: 100%;
`;

const CommnetWrap = styled.ul`
  width: 100%;
  border-top: 1px solid #ccc;
  padding-left: 2rem;

  li {
    padding-top: 0.5rem;
    list-style: circle;
  }
`;
