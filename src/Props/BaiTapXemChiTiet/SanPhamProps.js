import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamProps extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} height={300} alt="..." />
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan}</p>
          <button
            // onClick={this.setDetailPhone.bind(this, phone)}
            onClick={() => {
              // this.props.xemChiTiet(phone);
              this.props.xemChiTietSP(phone);
            }}
            className="btn btn-success m-2"
          >
            Xem Chi Tiet
          </button>
          <button className="btn btn-primary m-2"
            onClick={() => {
              this.props.themGioHang(phone);
            }}
          >
            Them Gio Hang
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTietSP: (sanPhamClick) => {
      const action = {
        type: "XEM_CHI_TIET_SP",
        sanPhamClick: sanPhamClick
      };
      dispatch(action);
    },
    themGioHang: (sanPham) => {
      const action = {
        type: "THEM_GIO_HANG",
        sanPham: sanPham
      };
      dispatch(action);
    }
  };
};
export default connect(null, mapDispatchToProps)(SanPhamProps);
