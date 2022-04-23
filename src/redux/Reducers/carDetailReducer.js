const defaultState = { name: "name default", img: "https://picsum.photos/200" };

export const carDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "XEM_CHI_TIET": {
      state = action.carDetail;
      return { ...state }; //immutable
    }

    default: {
      return state;
    }
  }
};
