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
    optionOpen(optionState, toggleState, index, options, optionModal) {
      dispatch({
        type: "OPTION_OPEN",
        optionState,
        toggleState,
        index,
        options,
        optionModal
      });
    },
    optionChoice(
      optionState,
      toggleState,
      option,
      contentsLength,
      selectedOptionsCount,
      selectedOptions
    ) {
      dispatch({
        type: "OPTION_CHOICE",
        optionState,
        toggleState,
        option,
        contentsLength,
        selectedOptionsCount,
        selectedOptions
      });
    },
    optionClose() {
      dispatch({
        type: "OPTION_CLOSE"
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
