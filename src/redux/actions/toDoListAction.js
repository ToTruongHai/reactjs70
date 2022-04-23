import axios from "axios";

export const getAllTaskAction = () => {
  return async (dispatch, getState) => {
    //getState() là hàm lấy giá trị từ rootReducer
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      //Lấy dữ liệu từ backend đưa vào redux
      const action = {
        type: "GET_ALL_TASK",
        arrTask: result.data,
      };
      dispatch(action);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const addTaskApiAction = (task) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: task,
      });

      //gọi lại hàm get để lấy dữ liệu mới add
      dispatch(getAllTaskAction());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const doneTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=" + taskName,
        method: "PUT",
      });

      //gọi lại hàm get để lấy dữ liệu mới add
      dispatch(getAllTaskAction());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const unDoTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: "PUT",
      });

      //gọi lại hàm get để lấy dữ liệu mới add
      //thêm await nếu như muốn gọi thêm nhiều dispatch khác
      await dispatch(getAllTaskAction());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const deleteTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
        method: "DELETE",
      });

      dispatch(getAllTaskAction());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
