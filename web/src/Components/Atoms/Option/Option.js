import React from 'react';

// STYLES
import styled, { css } from 'styled-components';

function Option({ selects }) {
  return selects.map(select => {
    return (
      <OptionEle key={select} value={select}>
        {select}
      </OptionEle>
    );
  });
}

export default Option;
const OptionEle = styled.option``;
