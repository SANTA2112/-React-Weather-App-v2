import { combineReducers } from 'redux'

import weather from './weather';
import loader from './loader';
import activeDay from './activeDay';

export default combineReducers({
  weather,
  loader,
  activeDay,
});
