import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  //không cần định nghĩa hàm này nữa nếu có thì khai báo state trong đây
  //react tự động khỏi tạo constructor cho dù không định nghĩa nó
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      object: {
        number: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    //quyết định có render lại component hay không (true or false)
    console.log("shouldComponentUpdate");

    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Number : {this.state.object.number}</h3>
        <h3>Like : {this.state.like}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            //   let newObject = this.state.object;
            //để component con nhận biết địa chỉ object thay đổi phải truyền
            //cả 1 object mới để components con nhận biết
            let newObject = { ...this.state.object };

            newObject.number += 1;
            this.setState({
              object: newObject,
            });
          }}
        >
          +
        </button>
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          like
        </button>
        <hr />
        <h3>Child Component</h3>
        {this.state.object.number > 3 ? (
          ""
        ) : (
          <ChildComponent object={this.state.object} />
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("-----------------");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
