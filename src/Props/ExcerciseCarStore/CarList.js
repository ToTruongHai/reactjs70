import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderCarList = () => {
    let { arrCar, xemChiTiet } = this.props;
    return arrCar.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem item={item} xemChiTiet={xemChiTiet}/>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderCarList()}</div>;
  }
}
