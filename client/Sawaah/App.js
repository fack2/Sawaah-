import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './src/reducers';
import ScreenNavigator from './ScreenNavigator';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
};

export default App;
