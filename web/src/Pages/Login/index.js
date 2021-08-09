import React from 'react';
import Priority from '../../Components/Atoms/Priority/Priority';
import Table from '../../Components/Molecules/Table/Table';

// TEMPLETE
import Templete from './Templetes/index';

function index() {
  return <Templete data_type={login} />;
}

export default index;

const login = {
  title: '로그인',
  inputLists: [
    {
      title: '사번을 입력해주세요',
      type: 'text',
    },
    {
      title: '비밀번호를 입력해주세요',
      type: 'password',
    },
  ],
  buttonLists: [
    {
      title: '회원가입으로 바로가기',
    },
    {
      title: '로그인',
    },
  ],
};
