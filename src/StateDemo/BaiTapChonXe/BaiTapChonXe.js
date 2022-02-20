import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/black-car.jpg",
  };

  //   changeImage = (url) => {
  //     this.setState({
  //       imgSrc: url,
  //     });
  //   };

  changeColor = (color) => {
    this.setState({
      imgSrc: `./img/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div className="container">
          <h3 className="text-center">Bai Tap Chon Mau Xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  //   onClick={this.changeImage.bind(this, "./img/black-car.jpg")}
                  onClick={this.changeColor.bind(this, "black")}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Black Car
                </button>
              </div>
              <div className="col-3">
                <button
                  //   onClick={this.changeImage.bind(this, "./img/steel-car.jpg")}
                  onClick={this.changeColor.bind(this, "steel")}
                  style={{ backgroundColor: "gray", color: "white" }}
                >
                  Steel Car
                </button>
              </div>
              <div className="col-3">
                <button
                  //   onClick={this.changeImage.bind(this, "./img/silver-car.jpg")}
                  onClick={this.changeColor.bind(this, "silver")}
                  style={{ backgroundColor: "silver", color: "white" }}
                >
                  Silver Car
                </button>
              </div>
              <div className="col-3">
                <button
                  //   onClick={this.changeImage.bind(this, "./img/red-car.jpg")}
                  onClick={this.changeColor.bind(this, "red")}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Red Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
