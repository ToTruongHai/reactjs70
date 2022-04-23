import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { layThongTinNguoiDung } from "../../redux/actions/quanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting";

export default function Profile() {
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.quanLyNguoiDungReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //gọi API lấy thông tin người dùng để load lên redux
    const action = layThongTinNguoiDung();
    dispatch(action);
  }, []);

  if (!localStorage.getItem(ACCESSTOKEN)) {
    alert("Yêu cầu đăng nhập !");
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <p>tài khoản: {userProfile.taiKhoan}</p>
      <p> họ tên: {userProfile.hoTen}</p>
      <p> email: {userProfile.email}</p>
      <p> số đt: {userProfile.soDT}</p>
    </div>
  );
}
