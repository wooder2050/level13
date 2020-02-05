import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { partner } = this.props;
    return (
      <div className="itemDetail-infoTab">
        <hr className="itemDetail-hr"></hr>
        <span className="itemDetail-infoTitle">상품정보고시 정보</span>
        <div className="itemDetail-infoContents">
          {partner &&
            partner.product_info.map((info, i) => {
              return (
                <span key={i + 1}>
                  <span className="infoContents-title">{info[0]}</span>
                  <span className="infoContents-content">{info[1]}</span>
                </span>
              );
            })}
        </div>
        <span className="itemDetail-infoTitle">업체 정보</span>
        <div className="itemDetail-infoContents">
          {partner &&
            partner.partner_info.map((info, i) => {
              return (
                <span key={i + 1}>
                  <span className="infoContents-title">
                    {info[0] === "" ? "/" : info[0]}
                  </span>
                  <span className="infoContents-content">{info[1]}</span>
                </span>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Footer;
