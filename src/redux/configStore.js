import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { carDetailReducer } from "./Reducers/carDetailReducer";
import { productDetailReducer } from "./Reducers/productDetailReducer";
import { gioHangReducer } from "./Reducers/gioHangReducer";
import { BaiTapGameXucXacReducer } from "./Reducers/baiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./Reducers/baiTapQuanLyNguoiDungReducer";
import { FakeBookAppReducer } from "./Reducers/FakeBookAppReducer";
import { toDoListReducer } from "./Reducers/toDoListReducer";

import reduxThunk from "redux-thunk";
import { modalReducer } from "./Reducers/modalReducer";
import { quanLyNguoiDungReducer } from "./Reducers/quanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./Reducers/quanLyPhimReducer";

const rootReducer = combineReducers({
  // Noi chua state cua ung dung
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
  BaiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
  FakeBookAppReducer,
  toDoListReducer,
  modalReducer,
  quanLyNguoiDungReducer,
  quanLyPhimReducer,
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(
  middleWare,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composeCustom);
