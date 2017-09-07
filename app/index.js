import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';
import { Provider } from 'react-redux';

import Home from '../app/screens/Home';
import store from './config/store';

const darkBlue = Color('#4F6D7A').darken(0.2);
const lightBlue = Color('#4F6D7A').lighten(0.8);

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $darkBlue: darkBlue,
  $lightBlue: lightBlue,

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
