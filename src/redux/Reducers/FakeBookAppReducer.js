const defaultState = {
  arrContent: [
    { name: "Hải", content: "Hello! 123" },
    { name: "Noa", content: "123!~~~~" },
  ],
};

export const FakeBookAppReducer = (state = defaultState, action) => {
  switch (action.type) {
      case 'COMMENT':{
        state.arrContent = [...state.arrContent, action.userComment];
        return {...state}
      }
    default:
      return state;
  }
};
