import React, { Component } from "react";
import { connect } from "react-redux";

class CarItemRedux extends Component {
  render() {
    let { item } = this.props;
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
              this.props.viewDetail(item);
            }}
          >
            Xem Chi Tiet
          </button>
        </div>
      </div>
    );
  }
}

// ham tao ra cac props la phuong thuc dua du lieu len redux
const mapDispatchToProps = (dispath) => {
  return {
    viewDetail: (carDetail) => {
      // console.log(carDetail);
      const action = {
        type: "XEM_CHI_TIET", // Thuoc tinh bat buoc khi dua du lieu len redux
        carDetail: carDetail,
      };
      // dung lam dispatch de dua du lieu len redux
      dispath(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(CarItemRedux);
