import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div className="container">
        {/* this.props.match.params.id là hàm support từ react-router  */}
        id: {this.props.match.params.id}
      </div>
    );
  }
}
