import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// TEMPLETE
import Templete from './Templetes/index';

// CONFIG, VALIDATION
import { BASE_URL } from '../../config';
import { validationFunction_LOGIN } from '../../validation';

function index() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    employee_number: '',
    password: '',
  });

  const onChangeUserValue = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isAllInputValid = () => {
    return Object.entries(userInfo).every(([key, value]) => {
      return validationFunction_LOGIN[key](value);
    });
  };

  const fetchLogin = async () => {
    const { employee_number, password } = userInfo;

    if (isAllInputValid()) {
      try {
        const res = await axios.post(
          `${BASE_URL}/users/signin`,
          {
            employee_number,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          history.push('/calendar');
        }
      } catch (err) {
        console.log(`err.respond`, err.response);
        switch (err.response.status) {
          case 401:
            alert('You do not have permission to access.');
          default:
            alert('Please check the employee number and password.');
            break;
        }
      }
    }
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  return (
    <Templete
      fetchLogin={fetchLogin}
      onChange={onChangeUserValue}
      goToSignup={goToSignup}
    />
  );
}

export default index;
