import { USER_LOGIN } from "../../util/setting";

let resultLogin;

if (localStorage.getItem(USER_LOGIN)) {
  resultLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const defaultState = {
  userLogin: resultLogin,
  userProfile: {},
};

export const quanLyNguoiDungReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN_NGUOI_DUNG":
      state.userProfile = action.userProfile;
      return { ...state };

    default:
      return state;
  }
};
