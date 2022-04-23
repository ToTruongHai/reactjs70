import React, { useEffect, useState } from "react";
import ToDoAppRFC from "./ToDoAppRFC";


export default function HookUseEffect() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);
  // const timeOut = setInterval(() => {
  //   console.log(1);
  // }, 1000);

  useEffect(() => {
    //Chạy sau khi giao diện được tạo ra
    // Thay thế cho componentDidMount và componentDidUpdate tương ứng react class component
    // console.log("componentDidMount & componentDidUpdate");
  });

  useEffect(() => {
    //Chạy 1 lần duy nhất sau khi render
    //Thay thế componentDidMount lấy dữ liệu về backend
    console.log("componentDidMount");

    return () => {
      console.log("willUnMount");
      // clearInterval(timeOut);
    };
  }, []);

  useEffect(() => {
    //kiểm tra giá trị number thay đổi thì sẽ chạy lại hàm này (giống component did update)
    console.log("componentDidUpdate number");
  }, [number]); //giá trị thay đổi thì hàm này mới chạy (so sánh shallow compare)

  console.log("render");

  return (
    <div className="container">
      <p>{number}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <p>Like: {like}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <hr />
      <ToDoAppRFC />
    </div>
  );
}
