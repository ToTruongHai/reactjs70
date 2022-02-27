import React, { Component } from "react";

export default class SanPhamProps extends Component {
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
                this.props.xemChiTiet(phone);
            }}
            className="btn btn-success"
          >
            Xem Chi Tiet
          </button>
        </div>
      </div>
    );
  }
}
