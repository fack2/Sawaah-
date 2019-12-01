const initialState = {
  destinationCountries: [],
  country: 'Country',
  date: 'Date',
  classType: 'Class',
  adultsNumber: '',
  childrenNumber: '',
  dateDropdownListEnabled: false,
  classDropdownListEnabled: false,
  ticketResults: [],
};

const defaultAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DESTINATION_COUNTRIES_GET':
      return {
        ...state,
        destinationCountries: action.payload,
      };

    case 'COUNTRY_SELECT':
      return {
        ...state,
        country: action.payload,
      };

    case 'DATE_SELECT':
      return {
        ...state,
        date: action.payload,
      };

    case 'CLASSTYPE_SELECT':
      return {
        ...state,
        classType: action.payload,
      };

    case 'ADULTS_NUMBER_CHANGE':
      return {
        ...state,
        adultsNumber: action.payload,
      };

    case 'CHILDREN_NUMBER_CHANGE':
      return {
        ...state,
        childrenNumber: action.payload,
      };

    case 'DATE_DROPDOWN_LIST_ENABLE':
      return {
        ...state,
        dateDropdownListEnabled: action.enabled,
        date: action.date,
      };

    case 'CLASS_DROPDOWN_LIST_ENABLE':
      return {
        ...state,
        classDropdownListEnabled: action.enabled,
        classType: action.classType,
      };

    default:
      return state;
  }
};

export default defaultAppReducer;
