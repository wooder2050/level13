import React, { Component } from "react";
import "./SelectedOption.scss";
import minus from "../../image/minus.svg";
import plus from "../../image/plus.svg";
import { makeComma } from "../../reducers/utility";

class SelectedOption extends Component {
  render() {
    const {
      discount_price,
      selectedOptions,
      selectedOptionsCount,
      optionPlus,
      optionMinus,
      cancelSelected
    } = this.props;

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
                  <span
                    onClick={e =>
                      cancelSelected(selectedOptions, i, selectedOptionsCount)
                    }
                    className="itemDetail-icon-cancel"
                  >
                    <span className="icon-cancel">+</span>
                  </span>
                </div>
                <div className="itemDetail-selected-text-container">
                  <span className="itemDetail-itemPrice">
                    {makeComma(
                      (discount_price + option[2][1]) * selectedOptionsCount[i]
                    )}
                    원
                  </span>
                  <div className="itemDetail-counter">
                    <img
                      onClick={e =>
                        optionMinus(selectedOptionsCount, i, option[2][2])
                      }
                      src={minus}
                      className="itemDetail-count-btn"
                      alt="빼기버튼"
                    />
                    <span className="itemDetail-count-number">
                      {selectedOptionsCount[i]}
                    </span>
                    <img
                      onClick={e =>
                        optionPlus(selectedOptionsCount, i, option[2][2])
                      }
                      src={plus}
                      className="itemDetail-count-btn"
                      alt="더하기버튼"
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
