import React from 'react';

// ATOMS, MOLECULES, ORGANISMS
import { Span, Button } from '../../../Components/Atoms';
import { InputLabel } from '../../../Components/Molecules';
import { Form } from '../../../Components/Organisms';

// STYLES
import styled from 'styled-components';

function index({ goToSignup, onChange, fetchLogin }) {
  return (
    <Templete>
      <Form fetch={fetchLogin}>
        <Container>
          <Span size="h1">LOGIN</Span>
          <AdminInputBox>
            <InputLabel
              onChange={onChange}
              name="employee_number"
              type="text"
              placeholder="Please enter your employee number"
            >
              Employee Number
            </InputLabel>
            <InputLabel
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Please enter your password"
            >
              Password
            </InputLabel>
          </AdminInputBox>
          <Button bg="admin" fetch={fetchLogin}>
            LOGIN
          </Button>
          <Button onClick={goToSignup} bg="admin">
            GO TO SIGNUP
          </Button>
        </Container>
      </Form>
    </Templete>
  );
}

export default index;

const Templete = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  height: 100vh;
`;
const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const AdminInputBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  margin-bottom: 1rem;
`;
