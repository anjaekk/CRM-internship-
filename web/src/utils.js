export const validationName = name => name.length > 0;

export const validationEmployeeNumber = number => number.length > 0;

export function validationPhoneNumber(phone) {
  const PHONE_REGES = /^\d{3}-\d{3,4}-\d{4}$/;
  return PHONE_REGES.test(phone);
}

export function validationPassword(password) {
  //비밀번호는 8글자 이상, 소문자나 대문자 입력하고 특수문자는 필수로 1글자
  const PASSWORD_REGES =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  return PASSWORD_REGES.test(password);
}

export const validationFunction = {
  employee_number: validationEmployeeNumber,
  name: validationName,
  contact: validationPhoneNumber,
  password: validationPassword,
};

// import { BASE_URL } from './config';

// export const customFatch = (
//   endpoint,
//   options = {},
//   { onSuccess, onFail } = {}
// ) => {
//   const token = localStorage.getItem('token');
//   const opts = {
//     method: 'GET',
//     headers: { Authorization: `Bearer ${token}` },
//     ...options,
//   };

//   return fetch(BASE_URL + endpoint, opts)
//     .then(res => res.json())
//     .then(res => onSuccess && onSuccess(res))
//     .catch(err => onFail && onFail(err));
// };

// export const apap = (methodd, url, data) => {
//   try {
//     const response = await methodd(url, config, data);
//     return response;
//   } catch (err) {
//     console.log(`err`, err);
//   }
// };
