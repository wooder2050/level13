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
              alt="storebookmark-img"
              src={partner.photo_url}
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
