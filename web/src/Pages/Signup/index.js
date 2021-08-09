import React from 'react';

// TEMPLETE
import Templete from './Templetes/index';

function index() {
  return <Templete data_type={signup} />;
}

export default index;

const signup = {
  title: '회원가입',
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
  signupInputLists: [
    {
      title: '이름을 입력해주세요',
      type: 'text',
    },
    {
      title: '연락처를 입력해주세요',
      type: 'text',
    },
  ],
  buttonLists: [
    {
      title: '로그인으로 바로가기',
      bg: '',
    },
    {
      title: '회원가입',
      bg: '',
    },
  ],
  selectLists: [
    {
      title: '부서명',
      selects: ['부서1', '부서2', '부서3'],
      size: 'mid',
    },
    {
      title: '직책명',
      selects: ['직책1', '직책2', '직책3'],
      size: 'mid',
    },
  ],
};
