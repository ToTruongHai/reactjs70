import React, { Component } from "react";
import { connect } from "react-redux";
import { dangNhapAction } from "../../redux/actions/quanLyNguoiDungAction";

 class Login extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
  };

  handleChangeInput = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    //tránh reload khi submit hoặc nhấn enter tránh mất dữ liệu đã nhập
    event.preventDefault();

    const action = dangNhapAction(this.state)
    this.props.dispatch(action)
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input
            name="taiKhoan"
            onChange={this.handleChangeInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input
            name="matKhau"
            onChange={this.handleChangeInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng nhập
          </button>
        </div>
      </form>
    );
  }
}


export default connect()(Login);
