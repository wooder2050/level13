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
    optionState,
    toggleState,
    selectedOptions
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
    optionState,
    toggleState,
    selectedOptions
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
    optionOpen(optionState, toggleState) {
      dispatch({
        type: "OPTION_OPEN",
        optionState,
        toggleState
      });
    },
    optionChoice(
      optionState,
      toggleState,
      option,
      contentsLength,
      selectedOptions
    ) {
      dispatch({
        type: "OPTION_CHOICE",
        optionState,
        toggleState,
        option,
        contentsLength,
        selectedOptions
      });
    },
    optionClose() {
      dispatch({
        type: "OPTION_CLOSE"
      });
    },
    optionPlus(selectedOptions) {
      dispatch({
        type: "OPTION_PLUS",
        selectedOptions
      });
    },
    optionMinus(selectedOptions) {
      dispatch({
        type: "OPTION_MINUS",
        selectedOptions
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
