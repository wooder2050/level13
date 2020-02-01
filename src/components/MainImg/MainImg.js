import React, { Component } from "react";
import "./MainImg.scss";

class MainImg extends Component {
  render() {
    const { photo_url} = this.props;
    return (
      <div className="main-img-wrapper">
        <img src={photo_url} className="main-img" alt="1st-product" />
      </div>
    );
  }
}

export default MainImg;
