import React, { Component } from "react";
import ItemDetailImg from "../ItemDetailImg/ItemDetailImg";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
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
      alreadySelectedMsg,
      optionOpen,
      optionChoice,
      optionClose,
      optionPlus,
      optionMinus,
      closeErrorModal
    } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="app">
          {toggleState && (
            <div onClick={optionClose} className="toggle-wrapper"></div>
          )}
          {optionCountError && (
            <div className="error-modal-wrapper">
              <div className="error-modal-text">수량이 부족합니다.</div>
              <div onClick={closeErrorModal} className="error-modal-btn">
                닫기
              </div>
            </div>
          )}
          {soldOutMsg && (
            <div className="error-modal-wrapper">
              <div className="error-modal-text">품절입니다.</div>
              <div onClick={closeErrorModal} className="error-modal-btn">
                닫기
              </div>
            </div>
          )}
          {alreadySelectedMsg && (
            <div className="error-modal-wrapper">
              <div className="error-modal-text">이미 있는 상품입니다.</div>
              <div onClick={closeErrorModal} className="error-modal-btn">
                닫기
              </div>
            </div>
          )}
          <div className="itemDetail-wrapper">
            <ItemDetailImg
              photo_url={photo_url}
              images={images}
              partner={partner}
              name={name}
              price={price}
              discount_price={discount_price}
              discount_rate={discount_rate}
              options={options}
              optionModal={optionModal}
              optionState={optionState}
              selectedOptions={selectedOptions}
              selectedOptionsCount={selectedOptionsCount}
              toggleState={toggleState}
              optionOpen={optionOpen}
              optionChoice={optionChoice}
              optionPlus={optionPlus}
              optionMinus={optionMinus}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <div>{html}</div>
        </div>
      </>
    );
  }
}

export default App;
