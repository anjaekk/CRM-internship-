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

  const fetchLogin = () => {
    const { employee_number, password } = userInfo;

    fetch(`${BASE_URL}/users/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employee_number,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(`res`, res);
        localStorage.setItem('token', res.token);
        alert('로그인에 성공했습니다');
        return goToCalendar();
      });
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  const goToCalendar = () => {
    history.push('/calendar');
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

// {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     employee_number,
//     password,
//   }),
// }

// axios({

// })

// .then(res => res.json())
// .then(res => console.log(`res`, res))
// .catch(err => console.log(`err`, err));
