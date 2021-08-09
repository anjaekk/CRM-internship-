import React from 'react';

// STYLES
import styled from 'styled-components';

function THead({ arr }) {
  return (
    <THeadEle>
      <tr>
        {arr.map((el, i) => {
          return <th key={el}>{el}</th>;
        })}
      </tr>
    </THeadEle>
  );
}

export default THead;

const THeadEle = styled.thead`
  th {
    border: 1px solid #ccc;
    padding: 1rem;
  }
`;
