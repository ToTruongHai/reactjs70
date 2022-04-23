import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTaskAction,
  addTaskApiAction,
  doneTaskApiAction,
  unDoTaskApiAction,
  deleteTaskApiAction,
} from "../../redux/actions/toDoListAction";

export default function ToDoList() {
  const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState({ taskName: "", status: false });

  useEffect(() => {});

  useEffect(async () => {
    /*
            dispatch một action là function
            action có 2 loại:
                + loại 1: {type: 'NAME', payload:data}
                + loại 2: function
    */
    //loại 2
    let action = getAllTaskAction();
    dispatch(action);
  }, []);

  const handleInputChange = (e) => {
    let { value, name } = e.target;
    setTask({
      ...task, // phải có task cũ không nó bị mất dữ liệu
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = addTaskApiAction(task);
    dispatch(action);
  };

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h3>To do list</h3>
          <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="task name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="taskName"
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="input-group-button btn btn-success"
                id="basic-addon2"
              >
                Add task
              </button>
            </div>
          </form>

          <table className="table">
            <tbody>
              {arrTask
                .filter((task) => task.status === false)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">incompleted</span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch(doneTaskApiAction(task.taskName));
                          }}
                          className="btn btn-success"
                        >
                          Done
                        </button>
                        <button
                          onClick={() => {
                            dispatch(deleteTaskApiAction(task.taskName));
                          }}
                          className="btn btn-danger ml-2"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>

            <tfoot>
              {arrTask
                .filter((task) => task.status === true)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">completed</span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch(unDoTaskApiAction(task.taskName));
                          }}
                          className="btn btn-warning"
                        >
                          Undo
                        </button>
                        <button
                          onClick={() => {
                            dispatch(deleteTaskApiAction(task.taskName));
                          }}
                          className="btn btn-danger ml-2"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
