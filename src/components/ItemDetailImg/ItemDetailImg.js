import React, { Component } from "react";
import MainImg from "../MainImg/MainImg";
import SubImg from "../SubImg/SubImg";
import StoreBookmark from "../StoreBookmark/StoreBookmark";
import ItemDetailOptions from "../ItemDetailOptions/ItemDetailOptions";
import SelectedOption from "../SelectedOption/SelectedOption";
import "./ItemDetailImg.scss";
import { makeComma } from "../../reducers/utility";

class ItemDetailImg extends Component {
  render() {
    const {
      photo_url,
      images,
      partner,
      name,
      price,
      discount_price,
      discount_rate,
      options,
      optionModal,
      optionState,
      toggleState,
      selectedOptions,
      selectedOptionsCount,
      optionOpen,
      optionChoice,
      optionPlus,
      optionMinus,
      cancelSelected,
      changeMainImg
    } = this.props;
    let sum = 0;
    if (selectedOptions) {
      for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i][2])
          sum +=
            (discount_price + selectedOptions[i][2][1]) *
            selectedOptionsCount[i];
      }
    }
    return (
      <>
        <div className="itemDetail-img-wrapper">
          <MainImg photo_url={photo_url} />
          <SubImg images={images} changeMainImg={changeMainImg} />
          <StoreBookmark partner={partner} />
        </div>
        <div className="itemDetail-text-wrapper">
          <div className="itemDetail-title-wrapper">
            <span className="itemDetail-title">{name}</span>
            <span className="itemDetail-free">무료배송</span>
          </div>
          <div className="itemDetail-prevPrice">{makeComma(price)}원</div>
          <div className="itemDetail-price-wrapper">
            <span className="itemDetail-price">
              {makeComma(discount_price)}원
            </span>
            <span className="itemDetail-discount-rate">{discount_rate}</span>
          </div>
          <ItemDetailOptions
            options={options}
            optionModal={optionModal}
            optionState={optionState}
            toggleState={toggleState}
            selectedOptions={selectedOptions}
            selectedOptionsCount={selectedOptionsCount}
            optionOpen={optionOpen}
            optionChoice={optionChoice}
          />
          <SelectedOption
            discount_price={discount_price}
            selectedOptions={selectedOptions}
            selectedOptionsCount={selectedOptionsCount}
            optionPlus={optionPlus}
            optionMinus={optionMinus}
            cancelSelected={cancelSelected}
          />
          <div className="itemDetail-total">
            <span className="itemDetail-totalText">총&nbsp;상품금액</span>
            <span className="itemDetail-totalPrice">{makeComma(sum)}원</span>
          </div>
        </div>
      </>
    );
  }
}

export default ItemDetailImg;
