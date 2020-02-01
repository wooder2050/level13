import React, { Component } from "react";
import "./SubImg.scss";

class SubImg extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className="itemDetail-subImg-wrapper">
        {images &&
          images.map((img, i) => {
            return (
              <div key={i + 1} className="sub-img-wrapper">
                <img src={img} className="sub-img" />
              </div>
            );
          })}
      </div>
    );
  }
}

export default SubImg;
