import React from 'react';

// STYLES
import styled from 'styled-components';

function Form({ children, fetch }) {
  const onSubmit = e => {
    e.preventDefault();
    fetch();
  };

  return <FormEle onSubmit={onSubmit}>{children}</FormEle>;
}

export default Form;

const FormEle = styled.form`
  width: 800px;
  padding: 2rem;
  border-radius: 5px;
`;
