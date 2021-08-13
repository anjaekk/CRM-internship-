import React from 'react';

import styled from 'styled-components';

import { EditableTable, Span } from '../../../Components/Atoms';
import { CommentBox } from '../../../Components/Organisms';

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
      <Span size="h2">BToolTek</Span>
      <TableFlex>
        <EditableTable column={column_product} data={product_data} />
        <EditableTable column={column_prioiry} data={priority_data} />
      </TableFlex>
      <EditableTable column={column_employee} data={employee_data} />
      <CommentBox />
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
