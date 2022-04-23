import axios from "axios";
import {
  ACCESSTOKEN,
  DOMAIN,
  http,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../util/setting";
import { history } from "../../util/setting";

export const layThongTinNguoiDung = () => {
  return async (dispatch) => {
    try {
      // let result = await axios({
      //   url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      //   method: "POST",
      //   headers: {
      //     TokenCybersoft: TOKEN_CYBERSOFT,
      //     Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN)
      //   },
      // });

      //Sử dụng config axios được custom lại trong file setting
      let result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");

      //đẩy lên redux
      dispatch({
        type: "LAY_THONG_TIN_NGUOI_DUNG",
        userProfile: result.data.content,
      });

      if (result.data.statusCode === 404) {
        alert("Đường dẫn không hợp lệ");
      }
    } catch (error) {
      
      console.log("error", error.response?.data);
    }
  };
};

//userLogin: {taiKhoan: '', matKhau: ''}
export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        method: "POST",
        data: userLogin,
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });
      //Lưu lại thông tin user và token khi người dùng đăng nhập thành công
      let resultLogin = result.data.content;
      let resultToken = resultLogin.accessToken;
      localStorage.setItem(ACCESSTOKEN, resultToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(resultLogin));
      console.log(result.data);

      //chuyển hướng trang
      history.push("/home");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
