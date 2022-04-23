import React, { Component } from "react";
import ChildComponents from "./ChildComponents";

export default class DemoProps extends Component {
  render() {
    let sp1 = {
      id: 1,
      name: "iPhone",
      price: "1000",
      img: "https://picsum.photo/id/1/200",
    };
    let sp2 = {
      id: 2,
      name: "iPhone X5",
      price: "2000",
      img: "https://picsum.photo/id/2/200",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ChildComponents sanPham={sp1} tenSanPham="Iphone" gia={1000} />
          </div>
          <div className="col-4">
            <ChildComponents sanPham={sp2} tenSanPham="Samsung" gia={2000} />
          </div>
        </div>
      </div>
    );
  }
}
