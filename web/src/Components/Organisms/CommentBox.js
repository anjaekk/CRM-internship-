import React from 'react';

// ATOMS, MOLECULES
import { Span } from '../../Components/Atoms';
import { InputSubmit } from '../../Components/Molecules';

// STYLES
import styled from 'styled-components';

function CommentBox() {
  return (
    <CommentBoxEle>
      <Span size="lg">Comments</Span>
      <CommnetWrap>
        <li>1차 미팅완료</li>
        <li>2차 미팅완료</li>
        <li>3차 미팅완료</li>
        <li>4차 미팅완료</li>
        <li>5차 미팅완료</li>
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

const CommentBoxEle = styled.div`
  width: 500px;
  border: 1px solid #ccc;
`;

const CommnetWrap = styled.ul`
  border-top: 1px solid #ccc;

  li {
    padding-top: 0.5rem;
  }
`;
