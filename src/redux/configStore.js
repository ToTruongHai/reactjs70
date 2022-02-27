import { combineReducers, createStore } from "redux";
import { carDetailReducer } from "./carDetailReducer";
import { productDetailReducer } from "./productDetailReducer";
import { gioHangReducer } from "./gioHangReducer";

const rootReducer = combineReducers({
  // Noi chua state cua ung dung
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
