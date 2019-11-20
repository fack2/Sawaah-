import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import defaultAppReducer from './src/reducers/defaultAppReducer';

import signupLoginReducer from './src/reducers/signupLoginReducer';
import ScreenNavigator from './ScreenNavigator';

const rootReducer = combineReducers({
  defaultAppReducer,
  signupLoginReducer,
});
const store = createStore(rootReducer);

console.log('state', store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
};

export default App;
