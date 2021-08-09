import React from 'react';

// ORGANISMS
import Table from '../../../Components/Molecules/Table/Table';

// MOLECULES
import Search from '../../../Components/Molecules/ContactSearch/ContactSearch';

// ATOMS
import Span from '../../../Components/Atoms/Span/Span';

// STYLES
import styled from 'styled-components';

function index({ arr }) {
  return (
    <TempleteEle>
      <Span size="h1">Contact</Span>
      <Search />
      <Table arr={arr} />
    </TempleteEle>
  );
}

export default index;

const TempleteEle = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
`;
