import React from 'react';

// ATOMS
import Input from '../../Atoms/Input/Input';

// STYLES
import styled, { css } from 'styled-components';

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
  ${({ theme }) => theme.flex('center', 'center', 'column')}
`;
