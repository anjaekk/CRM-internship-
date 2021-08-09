import React from 'react';

// STYLES
import styled from 'styled-components';

function TBody({ arr }) {
  // const checkTableType = ({ arr }) => {
  //   if (arr.col) {
  //     return (
  //       <React.Fragment>
  //         {arr.col.map(col => {
  //           return <td>{col}</td>;
  //         })}
  //       </React.Fragment>
  //     );
  //   } else {
  //     return <td>중요도자리</td>;
  //   }
  // };

  return (
    <TBodyEle>
      {arr.row.map(el => {
        // return <tr key={el}>{checkTableType({ arr })}</tr>;
        return (
          <tr key={el}>
            {arr.col.map(col => {
              return <td>{col}</td>;
            })}
          </tr>
        );
      })}
    </TBodyEle>
  );
}

export default TBody;

const TBodyEle = styled.tbody`
  td {
    border: 1px solid #ccc;
    padding: 1rem;
    background-color: yellow;
  }
`;
