import React from "react";
import { Button, DatePicker, version } from "antd";

export default function DemoAntd() {
  return (
    <div className="container">
      <h3>Demo antd</h3>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}
