import React from 'react';

// ATOMS, MOLECULES, ORGANISMS
import { Span, Button, Select } from '../../../Components/Atoms';
import { InputLabel } from '../../../Components/Molecules';
import { Form } from '../../../Components/Organisms';

// STYLES
import styled from 'styled-components';

function index({
  goToLogin,
  onChangeUserValue,
  selectDepartment,
  selectPosition,
  onChangeSelectValue,
  fetchSignup,
}) {
  return (
    <Templete>
      <Form fetch={fetchSignup}>
        <Container>
          <Span size="h1">SIGNUP</Span>
          <AdminInputBox>
            <InputLabel
              onChange={onChangeUserValue}
              name="employee_number"
              placeholder="Please enter your employee number"
              type="text"
            >
              Employee Number
            </InputLabel>
            <InputLabel
              onChange={onChangeUserValue}
              name="password"
              placeholder="Please enter your password"
              type="password"
            >
              Password
            </InputLabel>
            <InputLabel
              onChange={onChangeUserValue}
              name="name"
              placeholder="Please enter your employoee number"
              type="text"
            >
              Name
            </InputLabel>
            <InputLabel
              onChange={onChangeUserValue}
              name="contact"
              placeholder="Please enter your employoee number"
              type="text"
            >
              Contact
            </InputLabel>
          </AdminInputBox>
          <AdminSelectBox>
            <Select
              size="sm"
              selectLists={selectDepartment}
              onChange={onChangeSelectValue}
            />
            <Select
              onChange={onChangeSelectValue}
              size="sm"
              selectLists={selectPosition}
            />
          </AdminSelectBox>
          <Button bg="admin">SIGNUP</Button>
          <Button onClick={goToLogin} bg="admin">
            GO TO LOGIN
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
const AdminSelectBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
