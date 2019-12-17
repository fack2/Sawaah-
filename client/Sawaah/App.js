import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import defaultAppReducer from './src/reducers/defaultAppReducer';

import signupLoginReducer from './src/reducers/signupLoginReducer';
import ScreenNavigator from './ScreenNavigator';

const rootReducer = combineReducers({
  defaultAppReducer,
  signupLoginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
};

export default App;
