import React, { Component } from "react";
import MainImg from "../MainImg/MainImg";
import SubImg from "../SubImg/SubImg";
import StoreBookmark from "../StoreBookmark/StoreBookmark";
import ItemDetailOptions from "../ItemDetailOptions/ItemDetailOptions";
import SelectedOption from "../SelectedOption/SelectedOption";
import "./ItemDetailImg.scss";

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
      optionState,
      toggleState,
      selectedOptions,
      optionOpen,
      optionChoice,
      optionPlus,
      optionMinus
    } = this.props;
    function makeComma(str) {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    }
    return (
      <>
        <div className="itemDetail-img-wrapper">
          <MainImg photo_url={photo_url} />
          <SubImg images={images} />
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
            optionState={optionState}
            toggleState={toggleState}
            selectedOptions={selectedOptions}
            optionOpen={optionOpen}
            optionChoice={optionChoice}
          />
          <SelectedOption
            discount_price={discount_price}
            selectedOptions={selectedOptions}
            optionPlus={optionPlus}
            optionMinus={optionMinus}
          />
          <div className="itemDetail-total">
            <span className="itemDetail-totalText">총&nbsp;상품금액</span>
            <span className="itemDetail-totalPrice">0원</span>
          </div>
        </div>
      </>
    );
  }
}

export default ItemDetailImg;
