import React from 'react';

// STYLES
import styled from 'styled-components';

function Form({ children, fetch }) {
  const onSubmit = e => {
    e.preventDefault();
    fetch();
  };

  return <FormElement onSubmit={onSubmit}>{children}</FormElement>;
}

export default Form;

const FormElement = styled.form`
  width: 800px;
  padding: 2rem;
  border-radius: 5px;
`;
