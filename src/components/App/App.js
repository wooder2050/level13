import React, { Component } from "react";
import ItemDetailImg from "../ItemDetailImg/ItemDetailImg";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      name,
      price,
      discount_price,
      photo_url,
      discount_rate,
      images,
      options,
      html,
      partner
    } = this.props;
    return (
      <>
        <div className="app">
          <div className="itemDetail-wrapper">
            <ItemDetailImg
              photo_url={photo_url}
              images={images}
              partner={partner}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <div>{html}</div>
        </div>
      </>
    );
  }
}

export default App;
