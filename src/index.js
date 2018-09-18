import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './_assets/css/global.css';

import App from './App';
import store from './store';

window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
