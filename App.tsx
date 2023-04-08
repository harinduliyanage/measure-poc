import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import App from './src/screens';

const Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider >
);

export default Main;