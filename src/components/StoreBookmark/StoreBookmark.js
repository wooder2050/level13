import React, { Component } from "react";
import "./StoreBookmark.scss";

class StoreBookmark extends Component {
  render() {
    const { partner } = this.props;
    return (
      <div className="store-bookmark-wrapper">
        <div className="store-bookmark-img-wrapper">
          {partner && (
            <img
              src={partner.photo_url}
              alt="storebookmark-img"
              className="store-bookmark-img"
            />
          )}
        </div>
        <div className="store-bookmark-info">
          <div className="store-bookmark-name">{partner && partner.name}</div>
          <div className="store-bookmark-message">
            {partner && partner.message}
          </div>
        </div>
      </div>
    );
  }
}

export default StoreBookmark;
