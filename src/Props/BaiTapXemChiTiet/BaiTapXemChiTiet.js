import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

import { connect } from "react-redux";
import GioHang from "./GioHang";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

class BaiTapXemChiTiet extends Component {
  // state = {
  //   sanPhamChiTiet: {
  //     maSP: 1,
  //     tenSP: "VinSmart Live",
  //     manHinh: "AMOLED, 6.2, Full HD+",
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "20 MP",
  //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "4 GB",
  //     rom: "64 GB",
  //     giaBan: 5700000,
  //     hinhAnh: "./img/vsphone.jpg",
  //   },
  // };
  // setDetailPhone = (phone) => {
  //   this.setState({
  //     sanPhamChiTiet: {
  //       maSP: phone.maSP,
  //       tenSP: phone.tenSP,
  //       manHinh: phone.manHinh,
  //       heDieuHanh: phone.heDieuHanh,
  //       cameraTruoc: phone.cameraTruoc,
  //       cameraSau: phone.cameraSau,
  //       ram: phone.ram,
  //       rom: phone.rom,
  //       giaBan: phone.giaBan,
  //       hinhAnh: phone.hinhAnh,
  //     },
  //   });
  // };
  renderPhone = () => {
    return dataPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamProps
            phone={phone}
            // xemChiTiet={this.setDetailPhone}
          />
          {/* <div className="card">
            <img src={phone.hinhAnh} height={300} alt="..." />
            <div className="card-body">
              <p>{phone.tenSP}</p>
              <p>{phone.giaBan}</p>
              <button onClick={this.setDetailPhone.bind(this, phone)} className="btn btn-success">Xem Chi Tiet</button>
            </div>
          </div> */}
        </div>
      );
    });
  };
  render() {
    // console.log('props: ', this.props)
    return (
      <div className="container">
        <h3 className="text-center">Gio hang</h3>
        <GioHang></GioHang>
        <hr />
        <h3 className="text-center display-4">Danh Sach San Pham</h3>
        <div className="row">{this.renderPhone()}</div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{this.props.spChiTiet.tenSP}</h3>
              <img
                src={this.props.spChiTiet.hinhAnh}
                width={`100%`}
                height={`300px`}
                alt="..."
              />
            </div>
            <div className="col-8">
              <h3>Thong So Ky Thuat</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Man Hinh</th>
                    <th>{this.props.spChiTiet.manHinh}</th>
                  </tr>
                  <tr>
                    <th>He Dieu Hanh</th>
                    <th>{this.props.spChiTiet.heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera Truoc</th>
                    <th>{this.props.spChiTiet.cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <th>{this.props.spChiTiet.cameraSau}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{this.props.spChiTiet.ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{this.props.spChiTiet.rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//mapStatetoprops lay du lieu ve
const mapStateTopProps = (rootReducer) => {
  return {
    spChiTiet: rootReducer.productDetailReducer,
  };
};
export default connect(mapStateTopProps)(BaiTapXemChiTiet);
