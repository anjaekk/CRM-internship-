import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../../Atoms/Input/Input';

function SignupInputList({ signupInputLists }) {
  return (
    <SignupInputListEle>
      {signupInputLists.map((signupInputList, i) => {
        return <Input key={i} placeholder={signupInputList.title} />;
      })}
    </SignupInputListEle>
  );
}

export default SignupInputList;

const SignupInputListEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
