import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from './auth0-context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Auth0Provider>
      <App />
    </Auth0Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
