const initialState = {
  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
};

const signupLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME_SIGNUP':
      return {
        userName: action.payload,
      };
    case 'CHANGE_USER_EMAIL_SIGNUP':
      return {
        userEmail: action.payload,
      };
    case 'CHANGE_USER_PASSWORD_SIGNUP':
      return {
        userPassword: action.payload,
      };
    case 'CHANGE_USER_CONFIRM_PASSWORD_SIGNUP':
      return {
        userConfirmPassword: action.payload,
      };

    default:
      return state;
  }
};

export default signupLoginReducer;
