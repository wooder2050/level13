import React, { Component } from "react";
import ItemDetailImg from "../ItemDetailImg/ItemDetailImg";
import ErroModal from "../ErrorModal/ErrorModal";
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
      optionModal,
      optionState,
      toggleState,
      selectedOptions,
      selectedOptionsCount,
      optionCountError,
      soldOutMsg,
      alreadySelectedMsg,
      optionOpen,
      optionChoice,
      optionPlus,
      optionMinus,
      closeErrorModal,
      cancelSelected,
      changeMainImg
    } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="app">
          <ErroModal
            optionCountError={optionCountError}
            soldOutMsg={soldOutMsg}
            alreadySelectedMsg={alreadySelectedMsg}
            closeErrorModal={closeErrorModal}
          />
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
              optionModal={optionModal}
              optionState={optionState}
              selectedOptions={selectedOptions}
              selectedOptionsCount={selectedOptionsCount}
              toggleState={toggleState}
              optionOpen={optionOpen}
              optionChoice={optionChoice}
              optionPlus={optionPlus}
              optionMinus={optionMinus}
              cancelSelected={cancelSelected}
              changeMainImg={changeMainImg}
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
