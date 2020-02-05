import { connect } from "react-redux";
import App from "../components/App/App";
import response from "../api/response";

const mapStateToProps = state => {
  const {
    name,
    price,
    discount_price,
    photo_url,
    discount_rate,
    images,
    options,
    html,
    partner,
    optionModal,
    optionState,
    toggleState,
    selectedOptions,
    selectedOptionsCount,
    optionCountError,
    soldOutMsg,
    alreadySelectedMsg
  } = state.load;
  return {
    name,
    price,
    discount_price,
    photo_url,
    discount_rate,
    images,
    options,
    html,
    partner,
    optionModal,
    optionState,
    toggleState,
    selectedOptions,
    selectedOptionsCount,
    optionCountError,
    soldOutMsg,
    alreadySelectedMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      dispatch({
        type: "LOAD_DATA",
        response
      });
    },
    optionOpen(optionState, index, options, optionModal) {
      dispatch({
        type: "OPTION_OPEN",
        optionState,
        index,
        options,
        optionModal
      });
    },
    optionChoice(
      optionState,
      option,
      contentsLength,
      selectedOptionsCount,
      selectedOptions
    ) {
      dispatch({
        type: "OPTION_CHOICE",
        optionState,
        option,
        contentsLength,
        selectedOptionsCount,
        selectedOptions
      });
    },
    optionPlus(selectedOptionsCount, index, count) {
      dispatch({
        type: "OPTION_PLUS",
        selectedOptionsCount,
        index,
        count
      });
    },
    optionMinus(selectedOptionsCount, index, count) {
      dispatch({
        type: "OPTION_MINUS",
        selectedOptionsCount,
        index,
        count
      });
    },
    closeErrorModal() {
      dispatch({
        type: "CLOSE_ERROR_MODAL"
      });
    },
    cancelSelected(selectedOptions, index, selectedOptionsCount) {
      dispatch({
        type: "CANCEL_SELECTED",
        selectedOptions,
        index,
        selectedOptionsCount
      });
    },
    changeMainImg(image) {
      dispatch({
        type: "CHANGE_MAIN_IMG",
        image
      });
    },
    optionChoiceCancel() {
      dispatch({
        type: "OPTION_CHOICE_CANCEL"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
