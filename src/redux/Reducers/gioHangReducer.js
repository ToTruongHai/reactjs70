const defaultState = {
  gioHang: [
    {
      maSP: 1,
      hinhAnh: "./img/vsphone.jpg",
      tenSP: "VinSmart Live",
      soLuong: 3,
      giaBan: 5700000,
    },
  ],
};

export const gioHangReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TANG_GIAM_SO_LUONG": {
      let gioHangNew = [...state.gioHang];

      let timSanPham = gioHangNew.find((SP) => SP.maSP === action.maSanPham);
      if (timSanPham) {
        timSanPham.soLuong += action.soLuong;
        if (timSanPham.soLuong < 1) {
          if (window.confirm('bạn có muốn xóa sản phẩm')) {
            state.gioHang = gioHangNew.filter(SP => SP.maSP !== action.maSanPham);
            return {...state}
          }else {
            //lúc này số lượng là 0 nên -= để +1 lên lại
            timSanPham.soLuong -= action.soLuong;
          }
        }
      } 

      state.gioHang = gioHangNew;

      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangNew = [...state.gioHang];

      gioHangNew = gioHangNew.filter((sp) => sp.maSP !== action.maSanPhamClick);

      state.gioHang = gioHangNew;

      return { ...state };
    }
    case "THEM_GIO_HANG": {
      // tao ra 1 gio hang moi voi dia chi moi de cap nhat state neu co thay doi mang~
      let gioHangMoi = [...state.gioHang];
      //tu action gio hang tao ra object spGioHang
      let spGioHang = { ...action.sanPham, soLuong: 1 };
      //kiem tra sp da co trong gio hang
      let kiemTraSP = gioHangMoi.find((SP) => SP.maSP === spGioHang.maSP);
      if (kiemTraSP) {
        kiemTraSP.soLuong += 1;
      } else {
        gioHangMoi.push(spGioHang);
      }

      state.gioHang = gioHangMoi;
      return { ...state };
    }

    default:
      return state;
  }
};
