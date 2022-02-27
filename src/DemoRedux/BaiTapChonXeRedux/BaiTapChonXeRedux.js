import React, { Component } from "react";
import CarListRedux from "./CarListRedux";
import CarModalRedux from "./CarModalRedux";

export default class BaiTapChonXeRedux extends Component {
  carList = [
    {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "Steel car",
      img: "./img/steel-car.jpg",
      price: 4000,
    },
  ];

  render() {
    return (
      <div className="container">
        <h3>Car List</h3>
        <CarModalRedux />
        <CarListRedux productList={this.carList} />
      </div>
    );
  }
}
