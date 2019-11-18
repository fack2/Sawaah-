import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';

import reducer from './src/reducers';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaView></SafeAreaView>
    </Provider>
  );
};

export default App;
