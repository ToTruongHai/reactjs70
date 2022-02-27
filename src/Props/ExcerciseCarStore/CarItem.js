import React, { Component } from "react";

export default class CarItem extends Component {
  render() {
    let { item, xemChiTiet} = this.props;
    return (
      <div className="card">
        <img src={item.img} alt="" />
        <div className="card-body">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
                xemChiTiet(item);
            }}
          >
            Xem Chi Tiet
          </button>
        </div>
      </div>
    );
  }
}
