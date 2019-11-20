export const countrySelector = payload => {
  return {
    type: 'SELECT_COUNTRY',
    payload,
  };
};

export const dateSelector = payload => {
  return {
    type: 'SELECT_DATE',
    payload,
  };
};
export const classTypeSelector = payload => {
  return {
    type: 'SELECT_CLASSTYPE',
    payload,
  };
};

export const adultsNumberChange = payload => {
  return {
    type: 'CHANGE_ADULTS_NUMBER',
    payload,
  };
};

export const childrenNumberChange = payload => {
  return {
    type: 'CHANGE_CHILDREN_NUMBER',
    payload,
  };
};

export const emailInputChange = payload => {
  return {
    type: 'ENTER_EMAIL',
    payload,
  };
};

export const passwordInputChange = payload => {
  return {
    type: 'ENTER_PASSWORD',
    payload,
  };
};
