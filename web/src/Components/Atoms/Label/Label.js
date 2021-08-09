import React from 'react';

// STYLES
import styled, { css } from 'styled-components';

function Label({ children }) {
  return <LabelEle>{children}</LabelEle>;
}

export default Label;

const LabelEle = styled.label``;
