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

export const validationFunction_SIGNUP = {
  employee_number: validationEmployeeNumber,
  name: validationName,
  contact: validationPhoneNumber,
  password: validationPassword,
};

export const validationFunction_LOGIN = {
  employee_number: validationEmployeeNumber,
  password: validationPassword,
};
