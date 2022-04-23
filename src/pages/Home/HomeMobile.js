import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachPhimAction } from "../../redux/actions/quanLyPhimAction";

export default function HomeMobile() {
  const { arrPhim } = useSelector(
    (rootReducer) => rootReducer.quanLyPhimReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
  }, []);

  const renderPhim = () => {
    return arrPhim.map((phim, index) => {
      return (
        <div className="d-flex mt-1 mb-1" key={index}>
          <div style={{ width: 200 }}>
            <img
              src={phim.hinhAnh}
              style={{ width: "inherit", height: "100%" }}
            />
          </div>
          <div className="ml-1">
            <div className="card">
              <div className="card-header bg-dark text-white">
                {phim.tenPhim}
              </div>
              <div className="card-body">
                <p style={{ height: 75 }}>
                  {phim.moTa.length > 100
                    ? phim.moTa.substr(0, 100) + "..."
                    : phim.moTa}
                </p>
              </div>
              <div className="card-footer text-right">
                <button className="btn btn-success">Đặt vé</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center display-4">Danh sách phim</h3>
      {renderPhim()}
    </div>
  );
}
