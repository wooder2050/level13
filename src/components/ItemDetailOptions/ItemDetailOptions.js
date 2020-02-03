import React, { Component } from "react";
import "./ItemDetailOptions.scss";
import arrow from "../../image/arrow.png";

class ItemDetailOptions extends Component {
  render() {
    const {
      options,
      optionState,
      toggleState,
      selectedOptions,
      optionOpen,
      optionChoice
    } = this.props;
    let optionSize = 0;
    let optionLength = 0;
    if (options) {
      if (optionState && optionState.length >= 1) {
        let result = options.data
          .filter(data => data.positions[0] === optionState[0])
          .map(size => size.positions[1]);
        optionSize = result.filter(
          (item, index) => result.indexOf(item) === index
        );
      }
      if (optionState && optionState.length >= 2) {
        let result2 = options.data
          .filter(
            data =>
              data.positions[0] === optionState[0] &&
              data.positions[1] === optionState[1]
          )
          .map(function(length) {
            let result = [];
            result.push(length.positions[2]);
            result.push(length.data.option_price);
            return result;
          });
        optionLength = result2.filter(
          (item, index) => result2.indexOf(item) === index
        );
      }
    }

    return (
      <div className="itemDetail-options-wrapper">
        <p className="itemDetail-options-text">옵션선택</p>
        {options &&
          options.names.map((name, i) => {
            return (
              <div className="option-select" key={i + 1}>
                <div
                  onClick={e => optionOpen(optionState, toggleState)}
                  className="option-select-title"
                >
                  {optionState &&
                  optionState.length > i &&
                  optionState[i] !== 0 ? (
                    <strong>
                      {typeof optionState[i] !== "string"
                        ? optionState[i][0]
                        : optionState[i]}
                    </strong>
                  ) : (
                    name
                  )}
                </div>
                <div className="option-select-icon">
                  <img className="arrow" src={arrow} />
                </div>
                {options.contents[i] &&
                  toggleState &&
                  optionState.length === i + 1 && (
                    <div className="options-contents">
                      <div className="option-contents-title">{name}</div>

                      {optionState.length <= 1 &&
                        (optionSize === 0 || optionSize.length === 0) &&
                        options.contents[i].map((content, j) => {
                          return (
                            <div
                              onClick={e =>
                                optionChoice(
                                  optionState,
                                  toggleState,
                                  content,
                                  options.contents.length,
                                  selectedOptions
                                )
                              }
                              key={j + 1}
                              className="option-contents-text"
                            >
                              {content}
                            </div>
                          );
                        })}

                      {optionState.length <= 2 &&
                        typeof optionState[0] === "string" &&
                        optionSize !== 0 &&
                        optionSize.map((content, j) => {
                          return (
                            <div
                              onClick={e =>
                                optionChoice(
                                  optionState,
                                  toggleState,
                                  content,
                                  options.contents.length,
                                  selectedOptions
                                )
                              }
                              key={j + 1}
                              className="option-contents-text"
                            >
                              {content}
                            </div>
                          );
                        })}

                      {optionState.length <= 3 &&
                        typeof optionState[1] === "string" &&
                        optionLength !== 0 &&
                        optionLength.map((content, j) => {
                          return (
                            <div
                              onClick={e =>
                                optionChoice(
                                  optionState,
                                  toggleState,
                                  content,
                                  options.contents.length,
                                  selectedOptions
                                )
                              }
                              key={j + 1}
                              className="option-contents-text"
                            >
                              {content[0]} {`(+${content[1]}원)`}
                            </div>
                          );
                        })}
                    </div>
                  )}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ItemDetailOptions;
