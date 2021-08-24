import React from 'react';

// STYLES
import styled from 'styled-components';

function Label({ children }) {
  return <LabelElement>{children}</LabelElement>;
}

export default Label;

const LabelElement = styled.label`
  width: 100%;
  margin-top: 5px;
`;
