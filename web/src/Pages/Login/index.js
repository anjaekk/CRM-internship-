import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../config';

// TEMPLETE
import Templete from './Templetes/index';

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

  const goToSignup = () => {
    history.push('/signup');
  };

  const checkValue = () => {
    const { employee_number, password } = userInfo;

    if (employee_number.length === 0) {
      alert('employee number must be at least 8 digits');
    } else if (password.length < 8) {
      alert('employee number must be at least 8 digits');
    } else {
      fetchLogin();
    }
  };

  const fetchLogin = async () => {
    const { employee_number, password } = userInfo;

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
      switch (err.response.status) {
        case 401:
          alert('You do not have permission to access.');
        default:
          alert('Please check the employee number and password.');
          break;
      }
    }
  };

  return (
    <Templete
      fetchLogin={checkValue}
      onChange={onChangeUserValue}
      goToSignup={goToSignup}
    />
  );
}

export default index;
