import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.xucXac.reduce((diem, xucXac, index) => {
      return (diem += xucXac.soDiem);
    }, 0);

    let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";

    return `${tongDiem} - ${ketQua}`;
  };
  render() {
    return (
      <div className="row mt-5">
        <div className="col-4 text-right">
          <button
            className="bg-danger btn"
            onClick={() => {
              const action = {
                type: "DAT_CUOC",
                banChon: true,
              };
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px" }}
            >
              TÀI
            </div>
          </button>
        </div>
        <div className="col-4 text-center">
          {this.props.xucXac.map((xucXac, index) => {
            return <img key={index} src={xucXac.img} width={50} height={50} />;
          })}
          <div className="text-center display-4">{this.renderKetQua()}</div>
        </div>
        <div className="col-4 text-left">
          <button
            className="bg-danger btn"
            onClick={() => {
              const action = {
                type: "DAT_CUOC",
                banChon: false,
              };
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px" }}
            >
              XỈU
            </div>
          </button>
        </div>
      </div>
    );
  }
}

/*
    2 cách gửi dữ liệu lên redux
    cách 1: định tham số thứ 2 cho hàm connect là hàm mapDispatchToProps
    cách 2: sử dụng this.props.dispatch khi connect thì components đã có sẵn

    chỉ được chọn 1 trong 2 cách
*/

const mapStateToProps = (rootReducer) => {
  return {
    xucXac: rootReducer.BaiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
