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
                <td>
                  <button className="btn btn-primary"
                  onClick={() => {
                    this.props.tangGiamSoLuong(spGioHang.maSP, -1);
                  }}
                  >-</button>
                  {spGioHang.soLuong}
                  <button className="btn btn-primary ml-1"
                  onClick={() => {
                    this.props.tangGiamSoLuong(spGioHang.maSP, 1);
                  }}>+</button>
                  </td>
                <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                <td>
                  <button className="btn btn-danger"
                  onClick={()=>{
                    this.props.xoaGioHang(spGioHang.maSP);
                  }}>xoa</button>
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

const mapDispatchToProps = (dispatch) => {
  return{
    xoaGioHang: (maSanPhamClick) => {
      const action = {
        type: 'XOA_GIO_HANG',
        maSanPhamClick: maSanPhamClick
      }
      dispatch(action);
    },
    tangGiamSoLuong: (maSanPham, soLuong) => {
      const action = {
        type: 'TANG_GIAM_SO_LUONG',
        maSanPham: maSanPham,
        soLuong: soLuong
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateTopProps,mapDispatchToProps)(GioHang);
