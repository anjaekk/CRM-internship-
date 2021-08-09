import React from 'react';

// ATOMS
import THead from '../../Atoms/THead/THead';
import TBody from '../../Atoms/TBody/TBody';

// STYLES
import styled from 'styled-components';

function Table({ arr }) {
  return (
    <TableEle>
      <THead arr={arr.thead} />
      <TBody arr={arr.tbody} />
    </TableEle>
  );
}

export default Table;

const TableEle = styled.div``;
