import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    //State la thuoc tinh co san trong react class components
    login: false,
  };

  userName = "Nguyen Van A";

  renderFormLogin = () => {
    if (this.state.login) {
      return <div>Hello {this.userName}</div>;
    }
    return <button onClick={this.handleLogin}>Dang Nhap</button>;
  };
  handleLogin = () => {
    /*
    setState la phuong thuc async co san cua react class components
     + thay doi gia tri cua state = state moi
     + goi lai ham render lai giao dien
    */

    this.setState(
      {
        login: true,
      }, //goi ham` sau khi chay xong ham` setState
      () => {
        console.log(this.state.login);
      }
    );
  };
  render() {
    return (
      <div className="container">
        {/* {this.login ? <div>{this.userName}</div> : <button>Dang Nhap</button>} */}
        {this.renderFormLogin()}
      </div>
    );
  }
}
