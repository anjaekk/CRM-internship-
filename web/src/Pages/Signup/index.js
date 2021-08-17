import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// TEMPLETE
import Templete from './Templetes/index';

import { BASE_URL } from '../../config';

function index() {
  const history = useHistory();
  const [selectDepartment, setSelectDepartment] = useState(
    selectList_department
  );
  const [selectPosition, setSelectPosition] = useState(selectList_position);

  const [selectValue, setSelectValue] = useState({
    department: 0,
    position: 0,
  });

  const [userInfo, setUserInfo] = useState({
    employee_number: '',
    password: '',
    name: '',
    contact: '',
  });

  const onChangeUserValue = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onChangeSelectValue = e => {
    const { name, value } = e.target;
    setSelectValue({ ...selectValue, [name]: value });
  };

  const goToLogin = () => {
    history.push('/');
  };

  // FETCH 함수 다른곳으로 빼야한다.
  const fetchSignup = () => {
    const { employee_number, password, name, contact } = userInfo;
    const { department, position } = selectValue;

    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employee_number,
        password,
        name,
        phone_number: contact,
        department,
        job_title: position,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(`res`, res));
  };
  console.log(`selectValue`, selectValue);
  console.log(`userInfo`, userInfo);
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

const selectList_department = {
  id: 0,
  title: 'department',
  selects: [
    {
      id: 0,
      title: '임원',
    },
    {
      id: 1,
      title: '경영지원',
    },
    {
      id: 2,
      title: '영업지원',
    },
    {
      id: 3,
      title: '개발',
    },
    {
      id: 4,
      title: '마케팅',
    },
  ],
};

const selectList_position = {
  id: 1,
  title: 'position',
  selects: [
    {
      id: 0,
      title: '대표이사',
    },
    {
      id: 1,
      title: '이사',
    },
    {
      id: 2,
      title: '부장',
    },
    {
      id: 3,
      title: '차장',
    },
    {
      id: 4,
      title: '과장',
    },
    {
      id: 5,
      title: '대리',
    },
    {
      id: 6,
      title: '주임',
    },
    {
      id: 7,
      title: '사원',
    },
  ],
};
