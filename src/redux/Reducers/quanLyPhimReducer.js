const defaultState = {
  arrPhim: [],
};

export const quanLyPhimReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM":
      state.arrPhim = action.arrPhim;

      return { ...state };

    default:
      return state;
  }
};
