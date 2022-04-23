import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HookRedux(props) {
  const [state, setState] = useState({
    name: "",
    content: "",
  });

  //useSelector lấy dữ liệu từ redux
  const { arrContent } = useSelector(
    (rootReducer) => rootReducer.FakeBookAppReducer
  );
  //useDispatch: đưa dữ liệu lên redux
  const dispatch = useDispatch()

  const handleChangeInput = (e) => {
    setState({
      ...state, //phải có ...state để giữ giá trị cũ (không có sẽ bị mất)
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = {
        type: 'COMMENT',
        userComment: state
    }
    dispatch(action);
  };
  return (
    <div className="container">
      <h3>FakeBook app</h3>
      <div className="card">
        <div className="card-header">
          {arrContent.map((user, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${index}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-8">
                  <p className="text-danger font-weight-bold">{user.name}</p>
                  <p>{user.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>Name</p>
              <input
                onChange={handleChangeInput}
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Content</p>
              <input
                onChange={handleChangeInput}
                name="content"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
