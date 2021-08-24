import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// TEMPLETE
import Templete from './Templetes/index';

// CONFIG, VALIDATION
import { BASE_URL } from '../../config';
import { validationFunction_SIGNUP } from '../../validation';

// DATA
import { selectList_department, selectList_position } from './data';

function index() {
  const history = useHistory();
  const [selectDepartment, setSelectDepartment] = useState(
    selectList_department
  );
  const [selectPosition, setSelectPosition] = useState(selectList_position);
  const [selectValue, setSelectValue] = useState({
    department: null,
    position: null,
  });
  const [userInfo, setUserInfo] = useState({
    employee_number: '',
    password: '',
    name: '',
    contact: '',
  });

  // FUNCTIONS
  const isAllInputValid = () => {
    return Object.entries(userInfo).every(([key, value]) => {
      return validationFunction_SIGNUP[key](value);
    });
  };

  // USER가 입력한 INPUT의 정보
  const onChangeUserValue = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // USER가 선택한 부서와 직책
  const onChangeSelectValue = e => {
    const { name, value } = e.target;
    setSelectValue({ ...selectValue, [name]: parseInt(value) });
  };

  const goToLogin = () => {
    history.push('/');
  };

  const fetchSignup = async () => {
    const { employee_number, password, name, contact } = userInfo;
    const { department, position } = selectValue;

    if (isAllInputValid() && department && position) {
      try {
        const res = await axios.post(
          `${BASE_URL}/users/signup`,
          {
            employee_number,
            password,
            name,
            phone_number: contact,
            department,
            job_title: position,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (res) {
          alert(
            'You have successfully registered as a member. Go to the login page.'
          );
          goToLogin();
        }
      } catch (err) {
        console.log(`err.response`, err.response);
      }
    } else {
      alert('Please check your form again');
    }
  };

  return (
    <Templete
      fetchSignup={fetchSignup}
      onChangeSelectValue={onChangeSelectValue}
      selectDepartment={selectDepartment}
      selectPosition={selectPosition}
      onChangeUserValue={onChangeUserValue}
      goToLogin={goToLogin}
    />
  );
}

export default index;
