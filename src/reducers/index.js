import { combineReducers } from "redux";
import {
  LOAD_DATA,
  OPTION_OPEN,
  OPTION_CHOICE,
  OPTION_PLUS,
  OPTION_MINUS,
  CLOSE_ERROR_MODAL,
  CANCEL_SELECTED,
  CHANGE_MAIN_IMG
} from "../constants/actionTypes";
import {
  hasOption,
  makeOptionList1,
  makeOptionList2
} from "../reducers/utility";

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
  optionModal: null,
  optionState: null,
  toggleState: false,
  selectedOptions: null,
  selectedOptionsCount: null,
  optionCountError: null,
  soldOutMsg: null,
  alreadySelectedMsg: null
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
          partner: action.response.partner,
          optionCountError: false
        }
      );
    case OPTION_OPEN:
      let optionsList, optionsListElement;
      let newState = [];
      if (action.index === 0) {
        newState.push(0);
        optionsListElement = action.options.contents[0];
        optionsList = [];
        optionsList.push(optionsListElement);
      } else if (action.index === action.options.contents.length - 1) {
        newState = action.optionState.slice();
        if (newState[newState.length - 1] !== 0) newState.push(0);
        optionsListElement = makeOptionList2(
          action.options.data,
          action.optionState,
          action.index
        );
        if (action.index + 1 > action.optionModal.length) {
          optionsList = action.optionModal.slice();
          optionsList.push(optionsListElement);
          newState = action.optionState.slice();
          if (newState[newState.length - 1] !== 0) newState.push(0);
        } else {
          optionsList = action.optionModal.slice(0, action.index);
          optionsList.push(optionsListElement);
          newState = action.optionState.slice(0, action.index);
          if (newState[newState.length - 1] !== 0) newState.push(0);
        }
      } else {
        optionsListElement = makeOptionList1(
          action.options.data,
          action.optionState,
          action.index
        );
        if (action.index + 1 > action.optionModal.length) {
          optionsList = action.optionModal.slice();
          optionsList.push(optionsListElement);
          newState = action.optionState.slice();
          if (newState[newState.length - 1] !== 0) newState.push(0);
        } else {
          optionsList = action.optionModal.slice(0, action.index);
          optionsList.push(optionsListElement);
          newState = action.optionState.slice(0, action.index);
          if (newState[newState.length - 1] !== 0) newState.push(0);
        }
      }
      return Object.assign(
        { ...state },
        { optionState: newState, optionModal: optionsList, toggleState: true }
      );
    case OPTION_CHOICE:
      let optionState = action.optionState.slice();
      optionState[optionState.length - 1] = action.option;
      let newOptionState, option, checkListResult;
      if (optionState.length === action.contentsLength) {
        if (optionState[optionState.length - 1][2] === 0) {
          return Object.assign(
            { ...state },
            { optionState: null, soldOutMsg: true, toggleState: false }
          );
        } else {
          checkListResult = hasOption(action.selectedOptions, optionState);

          if (checkListResult) {
            return Object.assign(
              { ...state },
              {
                optionState: null,
                alreadySelectedMsg: true,
                toggleState: false
              }
            );
          } else {
            if (action.selectedOptionsCount) {
              option = action.selectedOptionsCount.slice();
              option.push(1);
              newOptionState = action.selectedOptions.slice();
              newOptionState.push(optionState);
            } else {
              option = [];
              option.push(1);
              newOptionState = [];
              newOptionState.push(optionState);
            }
            return Object.assign(
              { ...state },
              {
                optionState: null,
                selectedOptions: newOptionState,
                selectedOptionsCount: option,
                toggleState: false
              }
            );
          }
        }
      } else {
        return Object.assign(
          { ...state },
          { optionState: optionState, toggleState: false }
        );
      }

    case OPTION_PLUS:
      if (action.selectedOptionsCount[action.index] + 1 > action.count) {
        return Object.assign({ ...state }, { optionCountError: true });
      } else {
        let countArrayPlus = action.selectedOptionsCount.slice();
        countArrayPlus[action.index] += 1;
        return Object.assign(
          { ...state },
          { selectedOptionsCount: countArrayPlus }
        );
      }
    case OPTION_MINUS:
      if (action.selectedOptionsCount[action.index] - 1 > 0) {
        let countArrayMinus = action.selectedOptionsCount.slice();
        countArrayMinus[action.index] -= 1;
        return Object.assign(
          { ...state },
          { selectedOptionsCount: countArrayMinus }
        );
      } else {
        return Object.assign({ ...state });
      }
    case CLOSE_ERROR_MODAL:
      return Object.assign(
        { ...state },
        {
          optionCountError: false,
          soldOutMsg: false,
          alreadySelectedMsg: false
        }
      );
    case CANCEL_SELECTED:
      let newSelectedOption = action.selectedOptions.slice();
      newSelectedOption.splice(action.index, 1);
      return Object.assign(
        { ...state },
        {
          selectedOptions: newSelectedOption
        }
      );
    case CHANGE_MAIN_IMG:
      return Object.assign(
        { ...state },
        {
          photo_url: action.image
        }
      );
    default:
      return state;
  }
}

export default combineReducers({
  load: loadReducers
});
