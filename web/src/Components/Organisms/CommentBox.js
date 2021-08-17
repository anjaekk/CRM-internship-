import React from 'react';

// ATOMS, MOLECULES
import { Span } from '../../Components/Atoms';
import { InputSubmit } from '../../Components/Molecules';

// STYLES
import styled from 'styled-components';

function CommentBox({ size }) {
  return (
    <CommentBoxEle size={size}>
      <Span size="sm">Comments</Span>
      <CommnetWrap>
        <li>First Meeting</li>
        <li>Second Meeting</li>
        <li>Third Meeting</li>
        <li>Fourth Meeting</li>
        <li>Fifth Meeting</li>
      </CommnetWrap>
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
  width: ${({ size }) => boxSize(size)};
  border: 1px solid #ccc;
  margin: 1rem 0;
`;

const CommnetWrap = styled.ul`
  border-top: 1px solid #ccc;

  li {
    padding-top: 0.5rem;
  }
`;
