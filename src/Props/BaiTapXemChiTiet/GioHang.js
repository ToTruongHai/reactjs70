import React, { Component } from "react";

import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Ma San Pham</th>
            <th>Hinh Anh</th>
            <th>Ten San Pham</th>
            <th>Don Gia</th>
            <th>So Luong</th>
            <th>Thanh Tien</th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHangProps.map((spGioHang, index) => {
            return (
              <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>
                  <img src={spGioHang.hinhAnh} width={`50px`} height={50} />
                </td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.giaBan}</td>
                <td>{spGioHang.soLuong}</td>
                <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                <td>
                  <button className="btn btn-danger">xoa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateTopProps = (rootReducer) => {
  return {
    //   tenProps: giaTriLayTuConfigStore
    gioHangProps: rootReducer.gioHangReducer.gioHang,
  };
};

export default connect(mapStateTopProps)(GioHang);
