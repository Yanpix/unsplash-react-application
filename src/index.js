import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import store from './store';
import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import './index.scss';

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
/* eslint-enable global-require */

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
