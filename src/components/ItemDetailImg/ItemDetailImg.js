import React, { Component } from "react";
import MainImg from "../MainImg/MainImg";
import SubImg from "../SubImg/SubImg";
import StoreBookmark from "../StoreBookmark/StoreBookmark";
import "./ItemDetailImg.scss";

class ItemDetailImg extends Component {
  render() {
    const { photo_url, images, partner } = this.props;
    return (
      <>
        <div className="itemDetail-img-wrapper">
          <MainImg photo_url={photo_url} />
          <SubImg images={images} />
          <StoreBookmark partner={partner} />
        </div>
        <div className="itemDetail-text-wrapper"></div>
      </>
    );
  }
}

export default ItemDetailImg;
