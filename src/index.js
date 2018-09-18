import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { getWeather } from './API';

getWeather(23, 56).then(console.log)

render(
  <App />,
  document.querySelector('#app')
);
