import React from 'react';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';
import LoginScreen from './src/screens/LoginScreen';
import App from './src/screens';

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;