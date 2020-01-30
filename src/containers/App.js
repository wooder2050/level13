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
    partner
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
    partner
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      dispatch({
        type: "LOAD_DATA",
        response
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
