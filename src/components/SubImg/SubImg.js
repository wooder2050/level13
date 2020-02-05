import React, { Component } from "react";
import "./SubImg.scss";

class SubImg extends Component {
  render() {
    const { images, changeMainImg } = this.props;
    return (
      <div className="itemDetail-subImg-wrapper">
        {images &&
          images.map((img, i) => {
            return (
              <div
                onClick={e => changeMainImg(img)}
                key={i + 1}
                className="sub-img-wrapper"
              >
                <img alt="sub" src={img} className="sub-img" />
              </div>
            );
          })}
      </div>
    );
  }
}

export default SubImg;
