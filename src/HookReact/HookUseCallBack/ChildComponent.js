import React, { memo } from "react";

function ChildComponent(props) {
  console.log("Children  component render");
  return (
    <div>
      <h3>Child Component</h3>
      <h3>Number child: {props.number}</h3>
      <button className="btn btn-success" onClick={() => {
          props.tangSoLuong(props.number + 1)
      }}>Tăng Số Lượng</button>
    </div>
  );
}

//meme dùng để chặn component con render lại khi không có dữ liệu thay đổi
export default memo(ChildComponent)
