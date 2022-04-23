import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    let { banChon, soBanThang, tongSoBanChoi } = this.props.baiTapGameXucXac;
    return (
      <div className="text-center display-4 mt-5">
        <div>
          Bạn Chọn:
          <span className="text-danger">{banChon ? "TÀI" : "XỈU"}</span>
        </div>
        <div>
          Số bàn thắng: <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          Tổng số bàn chơi:
          <span className="text-warning">{tongSoBanChoi}</span>
        </div>
        <button className="btn btn-success"
        onClick={()=>{
          const action = {
            type: 'PLAY_GAME',
          }
          this.props.dispatch(action);
        }}
        >
          <div className="p-2" style={{ fontSize: 25 }}>
            Play Game
          </div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    // banChon: rootReducer.BaiTapGameXucXacReducer.banChon,
    // soBanThang: rootReducer.BaiTapGameXucXacReducer.soBanThang,
    // tongSoBanChoi: rootReducer.BaiTapGameXucXacReducer.tongSoBanChoi,
    baiTapGameXucXac: rootReducer.BaiTapGameXucXacReducer,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
