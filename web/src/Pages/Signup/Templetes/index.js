import React from 'react';

// ORGANISMS
import AdminForm from '../../../Components/Organisms/AdminForm/AdminForm';

// STYLES
import styled from 'styled-components';

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
