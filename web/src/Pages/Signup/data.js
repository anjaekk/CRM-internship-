export const Signup = {
  title: '회원가입',
  inputLists: [
    {
      title: '사번',
      placeholder: '사번을 입력해주세요',
      type: 'text',
    },
    {
      title: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
      type: 'password',
    },
  ],
  signupInputLists: [
    {
      title: '이름',
      placeholder: '아름을 입력해주세요',
      type: 'text',
    },
    {
      title: '연락처',
      placeholder: '연락처를 입력해주세요',
      type: 'text',
    },
  ],
  buttonLists: [
    {
      title: '로그인으로가기',
      bg: '',
    },
    {
      title: '회원가입',
      bg: '',
    },
  ],
  selectLists: [
    {
      id: 0,
      title: '부서',
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
      size: 'mid',
    },
    {
      id: 1,
      title: '직책',
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
      size: 'mid',
    },
  ],
};
