import React, { useRef, useState } from "react";

export default function HookUseRef() {
  const [number, setNumber] = useState(0);
  let tongRef = useRef(null); //lưu lại các giá trị thay đổi khi setState

  const inputUserName = useRef(null); //DOM đến react component(qua thuộc tính ref)
  const inputPassword = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let username = document.getElementById("username").value;
    // let password = document.getElementById("password").value;
    // console.log("userName", username);
    // console.log("password", password);

    let userName = inputUserName.current.value;
    let password = inputPassword.current.value;

    inputUserName.current.style.color = "green";
    inputPassword.current.style.color = "green";

    console.log("userName", userName);
    console.log("password", password);
  };

  return (
    <div className="container">
      <div className="form-group">
        <p>Nhập vào 1 số</p>
        <input
          className="form-control"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          className="btn btn-success"
          onClick={() => {
            tongRef.current = tongRef.current + Number(number);
            console.log("tong ", tongRef);
          }}
        >
          Tính Tổng
        </button>
      </div>

      <hr />
      <form onSubmit={handleSubmit}>
        <h3>Form useRef</h3>
        <div className="form-group">
          <p>username</p>
          <input
            ref={inputUserName}
            className="form-control"
            id="username"
            name="username"
          />
        </div>
        <div className="form-group">
          <p>password</p>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="form-group">
          <button ref={inputPassword} type="submit" className="btn btn-success">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
