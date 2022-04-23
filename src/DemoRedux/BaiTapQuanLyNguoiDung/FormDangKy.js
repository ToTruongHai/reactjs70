import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { CAP_NHAT_NGUOI_DUNG } from "../../redux/actions/types/baiTapQuanLyNguoiDungType";
import { themNguoiDungAction } from "../../redux/actions/baiTapQuanLyNguoiDungAction";

class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      loaiNguoiDung: "1", //dữ liệu trường select lả phải có default (dữ liệu định sẵn cho dù chưa chọn)
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      matKhau: "",
    },
  };
  /*
    (event) lấy từ onChange callBack function của thẻ input chứ không tự truyền vào
    callBack function là tham số truyền vào 1 function khác
  */
  handleChangeInput = (event) => {
    let { name, value, type } = event.target;

    /* cập nhật value cho values */
    let newValues = { ...this.state.values };
    //Cập nhật value cho object values
    newValues[name] = value;

    /* cập nhật value cho errors */
    let newErrors = { ...this.state.errors };
    let errorMess = "";
    if (value === "") {
      errorMess = name + " không được bỏ trống! ";
    }

    /* Check định dạng sau lỗi bỏ trống tại bỏ trống cũng không có định dạng*/
    if (type === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        errorMess = name + " không đúng định dạng! ";
      }
    }

    //Cập nhật value cho object errors
    newErrors[name] = errorMess;

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      // đây là function trả về khi setState xong
      () => {
        // console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Phương thức cản sự kiện reload của broswer do javascripts support
    //kiểm tra hợp lệ khi submit
    let { values, errors } = this.state;
    let valid = true;
    //duyệt qua các giá trị của values
    for (let key in values) {
      if (values[key] === "") {
        alert("Thông tin chưa hợp lệ!");
        return;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        alert("Thông tin chưa hợp lệ!");
        return;
      }
    }
    //khi thông tin hợp lệ thì đưa dữ liệu lên redux
    // const action = {
    //   type: "THEM_NGUOI_DUNG",
    //   nguoiDung: this.state.values,
    // };
    const action = themNguoiDungAction(this.state.values);
    this.props.dispatch(action);
  };

  //Hàm này đang được gọi bởi handleChange(setState)
  //Hàm này được gọi khi bấm nút sửa (newProps)
  // nên không biết khi nào là hành động nào
  /* 
  static getDerivedStateFromProps(newProps, currentState) {
  //   //Hàm này sẽ chạy trước khi giao diện thay đổi
  //   //Nhận vào props mới trước khi render và state hiện tại

  //   // => lấy props từ redux gán vào state của component

  //   if (
  //     newProps.suaNguoiDung.taiKhoan !== currentState.values.taiKhoan
  //     ) {
  //     currentState = {
  //       ...currentState,
  //       values: newProps.suaNguoiDung,
  //     };
  //   }

  //   return currentState;
  }
  */

  //Hàm này chỉ chạy khi props thay đổi
  componentWillReceiveProps(newProps){
    //trước khi render và sau khi props thay đổi thì gán props vào state
    //do suaNguoiDung được lấy từ redux và nút sửa ở table được click đã cập nhật
    //giá trị của props trên redux và được phát hiện từ hàm này
    this.setState({
      values: newProps.suaNguoiDung
    })
  }

  render() {
    let { taiKhoan, hoTen, soDienThoai, matKhau, email, loaiNguoiDung } =
      this.state.values;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white text-center">
          <h3>Form Đăng Ký</h3>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Tài Khoản</p>
              <input
                name="taiKhoan"
                value={taiKhoan}
                className="form-control"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.taiKhoan}</div>
            </div>
            <div className="form-group">
              <p>Mật Khẩu</p>
              <input
                name="matKhau"
                value={matKhau}
                className="form-control"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.matKhau}</div>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.email}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Họ Tên</p>
              <input
                name="hoTen"
                value={hoTen}
                className="form-control"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.hoTen}</div>
            </div>
            <div className="form-group">
              <p>Số Điện Thoại</p>
              <input
                name="soDienThoai"
                value={soDienThoai}
                className="form-control"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.soDienThoai}</div>
            </div>
            <div className="form-group">
              <p>Loại người dùng</p>
              <select
                name="loaiNguoiDung"
                value={loaiNguoiDung}
                className="form-control"
                onChange={this.handleChangeInput}
              >
                <option value="1">Người Dùng</option>
                <option value="2">Quản Trị</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-outline-success">
            Đăng Ký
          </button>
          <button type="button" className="btn btn-outline-primary ml-2"
          onClick={() => {
            this.props.capNhatNguoiDung(this.state.values);
          }}>
            Cập Nhật
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    suaNguoiDung: rootReducer.baiTapQuanLyNguoiDungReducer.suaNguoiDung,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    capNhatNguoiDung: (nguoiDung) =>{
      const action = {
        type: CAP_NHAT_NGUOI_DUNG,
        nguoiDung: nguoiDung,
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
