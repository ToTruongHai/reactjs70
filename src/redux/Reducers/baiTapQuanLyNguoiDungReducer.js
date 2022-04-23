import { CAP_NHAT_NGUOI_DUNG, SUA_NGUOI_DUNG, THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../actions/types/baiTapQuanLyNguoiDungType";

//rxreducer
const defaultState = {
  mangNguoiDung: [
    {
      taiKhoan: "abc",
      hoTen: "Nguyễn A",
      soDienThoai: "0908090809",
      email: "nguyena@gmail.com",
      matKhau: "123456789",
      loaiNguoiDung: "1",
    },
    {
      taiKhoan: "xyz",
      hoTen: "Nguyễn B",
      soDienThoai: "0605060506",
      email: "nguyenb@gmail.com",
      matKhau: "987654321",
      loaiNguoiDung: "2",
    },
  ],
  suaNguoiDung: {
    taiKhoan: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
    matKhau: "",
    loaiNguoiDung: "1",
  },
};

export const baiTapQuanLyNguoiDungReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CAP_NHAT_NGUOI_DUNG: {
      let mangNguoiDungMoi = [...state.mangNguoiDung];

      let kiemTraNguoiDung = mangNguoiDungMoi.find(
        (nd) => nd.taiKhoan === action.nguoiDung.taiKhoan
      );
      if (kiemTraNguoiDung) {
        for (let key in kiemTraNguoiDung) {
          kiemTraNguoiDung[key] = action.nguoiDung[key];
        }
      }

      state.mangNguoiDung = mangNguoiDungMoi;

      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      state.suaNguoiDung = action.nguoiDung;
      return { ...state };
    }
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungMoi = [...state.mangNguoiDung];

      /* Dùng findIndex */
      //   let indexXoa = mangNguoiDungMoi.findIndex(
      //     (nguoiDung) => nguoiDung.taiKhoan === action.taiKhoan
      //   );
      //   if (indexXoa !== -1) {
      //     mangNguoiDungMoi.splice(indexXoa, 1);
      //   }

      /* Dùng filter */
      mangNguoiDungMoi = mangNguoiDungMoi.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );

      state.mangNguoiDung = mangNguoiDungMoi;
      return { ...state };
    }
    case THEM_NGUOI_DUNG: {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

      return { ...state };
    }
    default:
      return state;
  }
};
