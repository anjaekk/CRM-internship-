import React from 'react';

import styled from 'styled-components';
import AdminForm from '../../../Components/Organisms/AdminForm/AdminForm';

function index({ data_type }) {
  return (
    <Templete>
      <AdminForm data_type={data_type} />
    </Templete>
  );
}

export default index;

const Templete = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  height: 100vh;
`;
