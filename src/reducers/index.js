import { combineReducers } from "redux";
import {
  LOAD_DATA,
  OPTION_OPEN,
  OPTION_CHOICE,
  OPTION_CLOSE
} from "../constants/actionTypes";

const initialState = {
  name: null,
  price: null,
  discount_price: null,
  photo_url: null,
  discount_rate: null,
  images: null,
  options: null,
  html: null,
  partner: null,
  optionState: null,
  toggleState: false
};
export function loadReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return Object.assign(
        { ...state },
        {
          name: action.response.name,
          price: action.response.price,
          discount_price: action.response.discount_price,
          photo_url: action.response.photo_url,
          discount_rate: action.response.discount_rate,
          images: action.response.images,
          options: action.response.options,
          html: action.response.html,
          partner: action.response.partner
        }
      );
    case OPTION_OPEN:
      let newState = [];
      if (action.optionState === null) {
        newState.push(0);
      } else {
        newState = action.optionState.slice();
        if (newState[newState.length - 1] !== 0) newState.push(0);
      }
      return Object.assign(
        { ...state },
        { optionState: newState, toggleState: true }
      );
    case OPTION_CHOICE:
      let optionState = action.optionState.slice();
      optionState[optionState.length - 1] = action.option;

      return Object.assign(
        { ...state },
        { optionState: optionState, toggleState: false }
      );
    case OPTION_CLOSE:
      return Object.assign({ ...state }, { toggleState: false });
    default:
      return state;
  }
}

export default combineReducers({
  load: loadReducers
});
