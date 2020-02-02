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
      partner,
      optionState,
      toggleState,
      optionOpen,
      optionChoice,
      optionClose
    } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="app">
          {toggleState && (
            <div onClick={optionClose} className="toggle-wrapper"></div>
          )}
          <div className="itemDetail-wrapper">
            <ItemDetailImg
              photo_url={photo_url}
              images={images}
              partner={partner}
              name={name}
              price={price}
              discount_price={discount_price}
              discount_rate={discount_rate}
              options={options}
              optionState={optionState}
              toggleState={toggleState}
              optionOpen={optionOpen}
              optionChoice={optionChoice}
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
