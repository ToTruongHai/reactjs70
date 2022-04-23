import React, { Component } from "react";
import CarList from "./CarList";
import ModalCar from "./ModalCar";

let carList = [
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

export default class ExcerciseCarStore extends Component {
  state = {
    car: {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
  };
  setDetailModal = (car) => {
    this.setState({
      car: {
        id: car.id,
        name: car.name,
        img: car.img,
        price: car.price,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh Sach Xe</h3>
        <ModalCar detailCar={this.state.car} />
        <CarList arrCar={carList} xemChiTiet={this.setDetailModal}/>
      </div>
    );
  }
}
