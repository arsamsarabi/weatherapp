import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'resources/styles/theme';
import Store from 'store/Store';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app'),
);
