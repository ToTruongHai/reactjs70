import React, { useState } from "react";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ModalHOC from "./ModalHOC";
import { useDispatch, useSelector } from "react-redux";

export default function DemoHOCModal() {
  //default mở lên là 1 component register từ pages/register
//   const [component, setComponent] = useState(<Register />);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="mt-5 text-center display-4">Demo HOC</h3>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          const action = {
            type: "OPEN_FORM",
            component: <Register />,
            handleSubmit: () => {
              console.log("register sumbit");
            },
          };
          dispatch(action);
        }}
      >
        Đăng ký
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg ml-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
            const action = {
                type: "OPEN_FORM",
                component: <Login />,
                handleSubmit: () => {
                  console.log("login sumbit");
                },
              };
              dispatch(action);
        }}
      >
        Đăng nhập
      </button>
    </div>
  );
}
