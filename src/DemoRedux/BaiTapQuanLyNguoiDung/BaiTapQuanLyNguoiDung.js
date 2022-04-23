import React, { Component } from "react";
import { connect } from "react-redux";
import FormDangKy from "./FormDangKy";
import TableDanhSachNguoiDung from "./TableDanhSachNguoiDung";

class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <FormDangKy />
        <TableDanhSachNguoiDung />
      </div>
    );
  }
}

export default connect()(BaiTapQuanLyNguoiDung);
