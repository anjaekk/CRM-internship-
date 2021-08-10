import React from 'react';

// ATMOS
import Span from '../../Atoms/Span/Span';

// MOLECULES
import InputSubmit from '../../Molecules/InputSubmit/InputSubmit';

// STYLES
import styled from 'styled-components';

function CommentBox() {
  return (
    <CommentBoxEle>
      <Span size="h1">anjan</Span>
      <CommnetWrap>
        <li>hihi</li>
        <li>hihi</li>
        <li>hihi</li>
      </CommnetWrap>
      <InputSubmit />
    </CommentBoxEle>
  );
}

export default CommentBox;

const CommentBoxEle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid #ccc;
`;

const CommnetWrap = styled.ul`
  display: flex;

  flex-direction: column;
  border: 1px solid #ccc;
  padding-left: 1rem;

  li {
    padding: 0.5rem 0;
    list-style: none;
  }
`;
