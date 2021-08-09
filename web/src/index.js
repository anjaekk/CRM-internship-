import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// STYLES
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,

  document.getElementById('root')
);
