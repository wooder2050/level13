import React, { Component } from "react";
import "./ItemDetailOptions.scss";
import arrow from "../../image/arrow.png";

class ItemDetailOptions extends Component {
  render() {
    const {
      options,
      optionModal,
      optionState,
      toggleState,
      selectedOptions,
      selectedOptionsCount,
      optionOpen,
      optionChoice
    } = this.props;

    return (
      <div className="itemDetail-options-wrapper">
        <p className="itemDetail-options-text">옵션선택</p>
        {options &&
          options.names.map((name, i) => {
            return (
              <div className="option-select" key={i + 1}>
                <div
                  onClick={e =>
                    optionOpen(
                      optionState,
                      toggleState,
                      i,
                      options,
                      optionModal
                    )
                  }
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
                  <img alt="arrow-img" className="arrow" src={arrow} />
                </div>
                {options.contents[i] &&
                  toggleState &&
                  optionState.length === i + 1 && (
                    <div className="options-contents">
                      <div className="option-contents-title">{name}</div>
                      {optionModal[i] &&
                        optionModal[i].map((content, j) => {
                          return (
                            <div
                              onClick={e =>
                                optionChoice(
                                  optionState,
                                  toggleState,
                                  content,
                                  options.contents.length,
                                  selectedOptionsCount,
                                  selectedOptions
                                )
                              }
                              key={j + 1}
                              className="option-contents-text"
                            >
                              {typeof content !== "string"
                                ? `${content[0]} (+${content[1]}원)`
                                : content}
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
