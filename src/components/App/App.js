import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const { name } = this.props;
    return <div className="app">{name}</div>;
  }
}

export default App;
