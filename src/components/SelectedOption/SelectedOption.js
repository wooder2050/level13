import React, { Component } from "react";
import "./SelectedOption.scss";
import minus from "../../image/minus.svg";
import plus from "../../image/plus.svg";

class SelectedOption extends Component {
  render() {
    const {
      discount_price,
      selectedOptions,
      optionPlus,
      optionMinus
    } = this.props;
    function makeComma(str) {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    }
    console.log(selectedOptions);
    return (
      <div className="itemDetail-selected-wrapper">
        {selectedOptions &&
          selectedOptions.map((option, i) => {
            return (
              <div key={i + 1}>
                <div className="itemDetail-selected-container">
                  <div className="itemDetail-selected-option">
                    {`${option[0]}/${option[1]}/${
                      typeof option[2] === "string" ? option[2] : option[2][0]
                    }`}
                  </div>
                  <span className="itemDetail-icon-cancel">
                    <span className="icon-cancel">+</span>
                  </span>
                </div>
                <div className="itemDetail-selected-text-container">
                  <span className="itemDetail-itemPrice">
                    {makeComma(
                      (discount_price + option[2][1]) *
                        option[option.length - 1]
                    )}
                    원
                  </span>
                  <div className="itemDetail-counter">
                    <img
                      onClick={e => optionMinus(selectedOptions)}
                      src={minus}
                      className="itemDetail-count-btn"
                      alt="빼기 버튼"
                    />
                    <span className="itemDetail-count-number">
                      {option[option.length - 1]}
                    </span>
                    <img
                      onClick={e => optionPlus(selectedOptions)}
                      src={plus}
                      className="itemDetail-count-btn"
                      alt="더하기 버튼"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default SelectedOption;
