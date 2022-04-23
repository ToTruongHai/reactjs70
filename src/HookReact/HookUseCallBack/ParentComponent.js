import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);

  const tangSoLuong = () =>{
      setNumber(number + 1);
  }

  //Dùng callBack để khi bấm like nó không render lại component con
  const useCallBackTangSoLuong = useCallback(tangSoLuong, [number]);
  return (
    <div className="container">
      <h3>Demo UseCallBack</h3>
      <p>number: {number}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <p>like: {like}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      <hr />
      
      <ChildComponent number={number} tangSoLuong={useCallBackTangSoLuong} />
    </div>
  );
}
