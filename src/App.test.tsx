import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Auth0Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
