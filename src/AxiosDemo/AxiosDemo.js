import React, { Component } from "react";
import axios from "axios";
import { _ } from "lodash";

export default class AxiosDemo extends Component {
  state = {
    arrTask: [],
  };

  getApi = () => {
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    promise.then((result) => {
      console.log("result", result.data);
      this.setState({
        arrTask: result.data,
      });
    });
    promise.catch((error) => {
      console.log("error", error.response.data);
    });
  };

  //sau khi render giao diện thì thực thi
  componentDidMount(){
      this.getApi();
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            this.getApi();
          }}
        >
          Get all task
        </button>
        <h3 className="mt-2 text-center display-4">To do app</h3>
        <div className="d-flex justify-content-center">
          <table className="table w-50">
            <tbody>
              {/* <tr>
                <td>Ăn cơm</td>
                <td>
                  <span className="badge badge-success">complete</span>
                </td>
              </tr>
              <tr>
                <td>Quét nhà</td>
                <td>
                  <span className="badge badge-danger">complete</span>
                </td>
              </tr> */}
              {this.state.arrTask.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      {
                      task.status ? (
                        <span className="badge badge-success">complete</span>
                      ) : (
                        <span className="badge badge-danger">incomplete</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
