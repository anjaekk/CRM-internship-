import React from 'react';

// ATOMS
import Select from '../../Atoms/Select/Select';
import Input from '../../Atoms/Input/Input';

// STYLES
import styled from 'styled-components';

function ContactSearch() {
  const arr = ['name', 'company'];
  return (
    <ContactSearchEle>
      <Select name="select" size="sm" selects={arr} />
      <Input placeholeder="입력하세요" />
    </ContactSearchEle>
  );
}

export default ContactSearch;

const ContactSearchEle = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
