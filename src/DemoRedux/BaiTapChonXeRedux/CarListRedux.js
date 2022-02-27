import React, { Component } from "react";
import CarItemRedux from "./CarItemRedux";

export default class CarListRedux extends Component {
  renderCarList = () => {
    let { productList } = this.props;
    return productList.map((car, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItemRedux item={car} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderCarList()}</div>;
  }
}
