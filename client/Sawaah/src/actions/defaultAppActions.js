import axios from 'axios';

export const getDestinationCountries = () => async dispatch => {
  try {
    const response = await axios.get(
      'http://192.168.1.168:4000/api/destination',
    );

    const payload = response.data;

    dispatch({
      type: 'DESTINATION_COUNTRIES_GET',
      payload,
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectCountry = payload => {
  return {
    type: 'COUNTRY_SELECT',
    payload,
  };
};

export const selectDate = payload => {
  return {
    type: 'DATE_SELECT',
    payload,
  };
};

export const selectClassType = payload => {
  return {
    type: 'CLASSTYPE_SELECT',
    payload,
  };
};

export const changeAdultsNumber = payload => {
  return {
    type: 'ADULTS_NUMBER_CHANGE',
    payload,
  };
};

export const changeChildrenNumber = payload => {
  return {
    type: 'CHILDREN_NUMBER_CHANGE',
    payload,
  };
};

export const enableDateDropdownList = () => (dispatch, getState) => {
  try {
    let enabled = '';
    const {country, date} = getState().defaultAppReducer;

    if (country !== 'Country') {
      enabled = true;

      dispatch({
        type: 'DATE_DROPDOWN_LIST_ENABLE',
        enabled,
        date,
      });
    } else {
      enabled = false;

      dispatch({
        type: 'DATE_DROPDOWN_LIST_ENABLE',
        enabled,
        date: 'Date',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const enableClassDropdownList = () => (dispatch, getState) => {
  try {
    let enabled = '';
    const {date, classType} = getState().defaultAppReducer;

    if (date !== 'Date') {
      enabled = true;

      dispatch({
        type: 'CLASS_DROPDOWN_LIST_ENABLE',
        enabled,
        classType,
      });
    } else {
      enabled = false;

      dispatch({
        type: 'CLASS_DROPDOWN_LIST_ENABLE',
        enabled,
        classType: 'Class',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
