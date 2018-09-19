import { CHANGE_DAY } from "../constants";

export default (state = 0, action) => {
  switch (action.type) {
    case CHANGE_DAY: return action.payload;
    default: return state;
  }
}
