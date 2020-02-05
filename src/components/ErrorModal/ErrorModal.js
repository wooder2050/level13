import React, { Component } from "react";
import "./ErrorModal.scss";

class ErrorModal extends Component {
  render() {
    const {
      optionCountError,
      soldOutMsg,
      alreadySelectedMsg,
      closeErrorModal
    } = this.props;
    return (
      <>
        {(optionCountError || soldOutMsg || alreadySelectedMsg) && (
          <div className="error-modal-wrapper">
            <div className="error-modal-text">
              {optionCountError && "수량이 부족합니다."}
              {soldOutMsg && "품절입니다."}
              {alreadySelectedMsg && "이미 있는 상품입니다."}
            </div>
            <div onClick={closeErrorModal} className="error-modal-btn">
              닫기
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ErrorModal;
