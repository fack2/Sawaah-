export const countrySelector = country => {
  return {
    type: 'SELECT_COUNTRY',
    country,
  };
};

export const dateSelector = date => {
  return {
    type: 'SELECT_DATE',
    date,
  };
};
export const classTypeSelector = classType => {
  return {
    type: 'SELECT_CLASSTYPE',
    classType,
  };
};

export const adultsNumberChange = adultsNumber => {
  return {
    type: 'CHANGE_ADULTS_NUMBER',
    adultsNumber,
  };
};

export const childrenNumberChange = childrenNumber => {
  return {
    type: 'CHANGE_CHILDREN_NUMBER',
    childrenNumber,
  };
};