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
        ...state,
        userName: action.payload,
      };
    case 'CHANGE_USER_EMAIL_SIGNUP':
      return {
        ...state,
        userEmail: action.payload,
      };
    case 'CHANGE_USER_PASSWORD_SIGNUP':
      return {
        ...state,
        userPassword: action.payload,
      };
    case 'CHANGE_USER_CONFIRM_PASSWORD_SIGNUP':
      return {
        ...state,
        userConfirmPassword: action.payload,
      };

    default:
      return state;
  }
};

export default signupLoginReducer;
