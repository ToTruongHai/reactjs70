import React, { Component } from "react";

export default class HandleEventReact extends Component {
  showMess = function () {
    alert("Hello hello");
  };

  showInfo = (name) => {
    alert("hello " + name);
  };

  render() {
    const handleClick = () => {
      console.log(123);
    };

    return (
      <div className="container">
          {/* onClick Event */}
        <button
          id="btnShowMess"
          onClick={() => {
            handleClick();
            this.showMess();
          }}
        >
          show message
        </button>
        <button onClick={this.showInfo.bind(this, "abc")}>show name</button>
        <button
          onClick={() => {
            this.showInfo("xyz");
          }}
        >
          show name 2
        </button>
      </div>
    );
  }
}
