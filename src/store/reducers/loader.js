import {
  LOADED,
  LOADING
} from '../constants';

export default (state = false, action) => {
  switch (action.type) {
    case LOADED: return false;
    case LOADING: return true;
    default: return state;
  }
};
