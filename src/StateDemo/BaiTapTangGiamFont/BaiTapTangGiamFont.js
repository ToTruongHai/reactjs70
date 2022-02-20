import React, { Component } from "react";

export default class BaiTapTangGiamFont extends Component {
  state = {
    fontSize: 20,
  };

  setFontSize = (fsize) => {
    let size = this.state.fontSize + fsize;
    this.setState({
      fontSize: size,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 style={{ fontSize: `${this.state.fontSize}px` }}>
          Bai Tap Tang Giam Font
        </h3>
        <button
          onClick={this.setFontSize.bind(this, 1)}
          className="btn btn-outline-primary"
        >
          +
        </button>
        <button
          onClick={this.setFontSize.bind(this, -1)}
          className="btn btn-outline-primary ml-2"
        >
          -
        </button>
      </div>
    );
  }
}
