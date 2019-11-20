export const signupNameChange = payload => {
  return {
    type: 'CHANGE_USER_NAME_SIGNUP',
    payload,
  };
};

export const signupEmailChange = payload => {
  return {
    type: 'CHANGE_USER_EMAIL_SIGNUP',
    payload,
  };
};

export const signupPasswordChange = payload => {
  return {
    type: 'CHANGE_USER_PASSWORD_SIGNUP',
    payload,
  };
};

export const signupConfirmPasswordChange = payload => {
  return {
    type: 'CHANGE_USER_CONFIRM_PASSWORD_SIGNUP',
    payload,
  };
};
