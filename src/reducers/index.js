import { combineReducers } from "redux";
import { LOAD_DATA } from "../constants/actionTypes";

const initialState = {
  name: null,
  price: null,
  discount_price: null,
  photo_url: null,
  discount_rate: null,
  images: null,
  options: null,
  html: null,
  partner: null
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
    default:
      return state;
  }
}

export default combineReducers({
  load: loadReducers
});
