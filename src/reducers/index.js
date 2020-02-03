import { combineReducers } from "redux";
import {
  LOAD_DATA,
  OPTION_OPEN,
  OPTION_CHOICE,
  OPTION_CLOSE,
  OPTION_PLUS,
  OPTION_MINUS
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
  data: null,
  optionState: null,
  toggleState: false,
  selectedOptions: null
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
      let option;
      if (optionState.length === action.contentsLength) {
        if (action.selectedOptions) {
          option = action.selectedOptions.slice();
          option.push(optionState);
        } else {
          option = [];
          optionState.push(1);
          option.push(optionState);
        }
        return Object.assign(
          { ...state },
          { optionState: null, selectedOptions: option, toggleState: false }
        );
      } else {
        return Object.assign(
          { ...state },
          { optionState: optionState, toggleState: false }
        );
      }
    case OPTION_PLUS:
      // let optionPlus = action.selectedOptions.slice();
      let optionPlus = [];
      for (let i = 0; i < action.selectedOptions.length; i++) {
        if (typeof action.selectedOptions[i] !== "string") {
          let tmp = action.selectedOptions[i].slice();
          optionPlus.push(tmp);
        } else {
          optionPlus.push(action.selectedOptions[i]);
        }
      }
      
      console.log(optionPlus, action.selectedOptions);
      optionPlus[optionPlus.length - 1] = optionPlus[optionPlus.length - 1] + 1;
      console.log(optionPlus);
      return Object.assign({ ...state }, { selectedOptions: optionPlus });
    case OPTION_MINUS:
      // let optionMinus = action.selectedOptions.slice();
      let optionMinus = [];
      for (let i = 0; i < action.selectedOptions.length; i++) {
        optionMinus.push(action.selectedOptions[i]);
      }
      optionMinus[optionMinus.length - 1] =
        optionMinus[optionMinus.length - 1] - 1;
      return Object.assign({ ...state }, { selectedOptions: optionMinus });
    case OPTION_CLOSE:
      return Object.assign({ ...state }, { toggleState: false });
    default:
      return state;
  }
}

export default combineReducers({
  load: loadReducers
});
