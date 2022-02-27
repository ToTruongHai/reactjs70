import React, { Component } from "react";

export default class DemoChildren extends Component {
  render() {
    return <div>
        {/* this.props.children la noi dung tren trong the cha goi components */}
        {this.props.children}
        </div>;
  }
}
