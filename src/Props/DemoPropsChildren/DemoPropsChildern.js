import React, { Component } from "react";
import ExcerciseCarStore from "../ExcerciseCarStore/ExcerciseCarStore";
import DemoChildren from "./DemoChildren";

export default class DemoPropsChildern extends Component {
  render() {
    return (
      <div>
        <h3>Demo ve truyen props children</h3>
        <DemoChildren>
          <p>hello it is me children</p>
          <ExcerciseCarStore />
        </DemoChildren>
      </div>
    );
  }
}
