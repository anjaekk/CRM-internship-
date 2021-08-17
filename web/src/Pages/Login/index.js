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

    fetch(`http://10.58.56.124:8000/users/signin`, {
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
      .then(res => console.log(`res`, res));
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
