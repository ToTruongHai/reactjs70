import React, { Component } from "react";

export default class ChildComponents extends Component {
  render() {
    /* 
        Su khac biet giua STATE va PROPS 
        + Giong Nhau: deu la thuoc tinh cua class components de binding du lieu
        + Khac Nhau: 
                    - State chua cac gia tri thay doi tren giao dien.
                      State co the thay doi duoc gia tri khi goi setState.

                    - Props la thuoc tinh cua component chua gia tri tu
                      component cha truyen vao. Props khong the thay doi gia tri
    */

    //this.props: la thuoc tinh co san cua class components
    //nhan tu components cha truyen vao, *LUU Y chi la gia tri READONLY*

    let { sanPham } = this.props;

    return (
      <div className="card">
        <div className="card-header">Header</div>
        {/* <img src="https://picsum.photos/200" alt="..." />
        <div className="card-body">
          <p>Ten San Pham: {this.props.tenSanPham}</p>
          <p>Gia Ban: {this.props.gia}</p>
        </div> */}
        <img src={sanPham.img} alt="..." />
        <div className="card-body">
          <p>Ten San Pham: {sanPham.name}</p>
          <p>Gia Ban: {sanPham.price}</p>
        </div>
      </div>
    );
  }
}
