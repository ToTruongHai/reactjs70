import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    submitted: true,

    nguoiDung: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleInputChange = (event) => {
    this.setState({
      nguoiDung: {
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
    this.setState({
      submitted: false,
    });
    event.preventDefault();
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Đăng ký</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input
            onChange={this.handleInputChange}
            name="taiKhoan"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Họ tên</p>
          <input
            onChange={this.handleInputChange}
            name="hoTen"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input
            onChange={this.handleInputChange}
            name="matKhau"
            type="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            onChange={this.handleInputChange}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input
            onChange={this.handleInputChange}
            name="soDienThoai"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng ký
          </button>
        </div>

        <Prompt
          when={this.state.submitted}
          message={(location) =>
            "Bạn chưa hoàn thành đăng ký, bạn muốn rời trang???"
          }
        />
      </form>
    );
  }
}
