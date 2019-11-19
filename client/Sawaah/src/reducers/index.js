const initialState = {
  country: '',
  date: '',
  classType: '',
  adultsNumber: '',
  childrenNumber: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        country: action.country,
      };
    case 'SELECT_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'SELECT_CLASSTYPE':
      return {
        ...state,
        classType: action.classType,
      };
    case 'CHANGE_ADULTS_NUMBER':
      return {
        ...state,
        adultsNumber: action.adultsNumber,
      };
    case 'CHANGE_CHILDREN_NUMBER':
      return {
        ...state,
        childrenNumber: action.childrenNumber,
      };

    default:
      return state;
  }
};

export default reducer;
