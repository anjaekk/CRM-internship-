import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// STYLES
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import 'react-datetime/css/react-datetime.css';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
