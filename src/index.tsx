import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './auth0-context';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const rootEl = document.getElementById('root');
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
  },
});

ReactDOM.render(
  <Auth0Provider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
