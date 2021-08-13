import React from 'react';

// STYLES
import styled from 'styled-components';

function Label({ children }) {
  return <LabelEle>{children}</LabelEle>;
}

export default Label;

const LabelEle = styled.label`
  width: 100%;
  margin-top: 5px;
`;
