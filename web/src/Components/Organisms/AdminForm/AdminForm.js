import React from 'react';
import styled, { css } from 'styled-components';

import Span from '../../Atoms/Span/Span';
import ButtonList from '../../Molecules/ButtonList/ButtonList';
import InputList from '../../Molecules/InputList/InputList';
import SelectList from '../../Molecules/SelectList/SelectList';
import SignupInputList from '../../Molecules/SignupInputList/SignupInputList';

function AdminForm({ data_type }) {
  const { title, inputLists, selectLists, signupInputLists, buttonLists } =
    data_type;
  return (
    <AdminFormEle>
      <Span size="h1">{title}</Span>
      <AdminInputBox>
        <InputList inputLists={inputLists} />
        {data_type.title === '회원가입' && (
          <SignupInputList signupInputLists={signupInputLists} />
        )}
      </AdminInputBox>
      {data_type.title === '회원가입' && (
        <SelectList selectLists={selectLists} />
      )}
      <ButtonList buttonLists={buttonLists} />
    </AdminFormEle>
  );
}

export default AdminForm;

const AdminFormEle = styled.form`
  max-width: 500px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const AdminInputBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
