import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  //không cần định nghĩa hàm này nữa nếu có thì khai báo state trong đây
  //react tự động khỏi tạo constructor cho dù không định nghĩa nó
  constructor(props) {
    super(props);
    this.state = {};
    console.log("child---constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại
    console.log("child---getDerivedStateFromProps");
    return currentState;
  }

  //Nếu sử dụng extends PureComponent thì không cần hàm này
  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("child---shouldComponentUpdate");

  //     //Kiểm tra newProps và this.props xem có thay đổi
  //     if (this.props.number === newProps.number) {
  //       return false;
  //     }

  //     return true;
  //   }

  render() {
    console.log("child---render");
    return (
      <div className="container">
        <p className="p-5 bg-dark text-white display-4">child component</p>
        <h3 className="text-danger">{this.props.object.number}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("child---componentDidMount");

    //kiểm tra nếu components khi bị xóa thì script còn chạy
    this.timeOut = setInterval(() => {
      console.log("123");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child---componentDidUpdate");
  }

  componentWillUnmount() {
    //Clear các hàm chạy ngầm hoặc các sự kiện addEventListener
    clearTimeout(this.timeOut);
  }
}
