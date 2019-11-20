const initialState = {
  country: '',
  date: '',
  classType: '',
  adultsNumber: '',
  childrenNumber: '',
  emailInput: '',
  passwordInput: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };
    case 'SELECT_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'SELECT_CLASSTYPE':
      return {
        ...state,
        classType: action.payload,
      };
    case 'CHANGE_ADULTS_NUMBER':
      return {
        ...state,
        adultsNumber: action.payload,
      };
    case 'CHANGE_CHILDREN_NUMBER':
      return {
        ...state,
        childrenNumber: action.payload,
      };
    case 'ENTER_EMAIL':
      return {
        ...state,
        emailInput: action.payload,
      };
    case 'ENTER_PASSWORD':
      return {
        ...state,
        passwordInput: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
