import React from 'react';

// ATOMS, ORGANISMS
import { Span } from '../../../Components/Atoms';
import { CommentBox } from '../../../Components/Organisms';
import EditableTable from '../../../Components/Atoms/EditableTable';

import styled from 'styled-components';

function Templete({
  column_prioiry,
  column_product,
  product_data,
  priority_data,
  column_employee,
  employee_data,
}) {
  return (
    <TempleteEle>
      <Span size="h1">Sales Datail</Span>
      <PriorityBox>
        <Span size="h2">BToolTek</Span>
        <EditableTable column={column_prioiry} data={priority_data} />
      </PriorityBox>
      <TableFlex>
        <EditableTable column={column_product} data={product_data} />
      </TableFlex>
      <EditableTable column={column_employee} data={employee_data} />
      <CommentBox size="mid">
        <li>first metting</li>
        <li>second metting</li>
        <li>thrid metting</li>
      </CommentBox>
    </TempleteEle>
  );
}

export default Templete;

const TempleteEle = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
`;
const TableFlex = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
const PriorityBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
