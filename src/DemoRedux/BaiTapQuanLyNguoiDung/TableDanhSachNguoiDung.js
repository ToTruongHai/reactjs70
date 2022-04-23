//rcredux: tạo ra 1 components kết nối sẵn redux
import React, { Component } from "react";
import { connect } from "react-redux";
//import lodash
import _ from "lodash";
import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../../redux/actions/types/baiTapQuanLyNguoiDungType";

class TableDanhSachNguoiDung extends Component {
  state = {
    sortBy: "taiKhoan",
  };

  handleSortBy = (name) => {
    console.log(name);
    this.setState({
      sortBy: name,
    });
  };
  render() {
    let { mangNguoiDung } = this.props;
    //Sử dụng hàm của lodash để sort theo tên dựa trên state
    mangNguoiDung = _.sortBy(mangNguoiDung, [this.state.sortBy]);
    return (
      <div className="card mt-5">
        <div className="card-header bg-primary text-white text-center">
          <h3>Danh Sách Người Dùng</h3>
        </div>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>STT</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSortBy("taiKhoan");
                }}
              >
                Tài Khoản
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSortBy("hoTen");
                }}
              >
                Họ Tên
              </th>
              <th>Mật Khẩu</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSortBy("email");
                }}
              >
                Email
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSortBy("soDienThoai");
                }}
              >
                Số Điện Thoại
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSortBy("loaiNguoiDung");
                }}
              >
                Loại Người Dùng
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mangNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.loaiNguoiDung === "1" ? "Người Dùng" : "Quản Trị"}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaNguoiDung(nguoiDung.taiKhoan);
                      }}
                    >
                      Xóa
                    </button>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => {
                        this.props.suaNguoiDung(nguoiDung);
                      }}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//() <=> {return}
const mapStateToProps = (rootReducer) => ({
  mangNguoiDung: rootReducer.baiTapQuanLyNguoiDungReducer.mangNguoiDung,
});

const mapDispatchToProps = (dispatch) => {
  return {
    xoaNguoiDung: (taiKhoan) => {
      const action = {
        type: XOA_NGUOI_DUNG,
        taiKhoan: taiKhoan,
      };
      dispatch(action);
    },
    suaNguoiDung: (nguoiDung) => {
      const action = {
        type: SUA_NGUOI_DUNG,
        nguoiDung: nguoiDung,
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDanhSachNguoiDung);
