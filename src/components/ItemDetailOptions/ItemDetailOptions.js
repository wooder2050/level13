import React, { Component } from "react";
import "./ItemDetailOptions.scss";
import arrow from "../../image/arrow.png";

class ItemDetailOptions extends Component {
  render() {
    const {
      options,
      optionState,
      toggleState,
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
                  onClick={e => optionOpen(optionState, toggleState)}
                  className="option-select-title"
                >
                  {optionState &&
                  optionState.length > i &&
                  optionState[i] !== 0 ? (
                    <strong>{optionState[i]}</strong>
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
                      {optionState.length === i + 1 &&
                        options.contents[i].map((content, j) => {
                          return (
                            <div
                              onClick={e =>
                                optionChoice(optionState, toggleState, content)
                              }
                              key={j + 1}
                              className="option-contents-text"
                            >
                              {content}
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
