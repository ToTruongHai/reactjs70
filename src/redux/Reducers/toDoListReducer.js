const defaultState = {
  arrTask: [],
};

export const toDoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_TASK": {
        state.arrTask = action.arrTask
        return {...state}
    }

    default:
      return state;
  }
};
