import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachPhimAction } from "../../redux/actions/quanLyPhimAction";

export default function Home() {
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
        <div className="col-3" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} className="w-100" style={{ height: 300 }} />
            <div className="card-body">
              <h3 style={{ height: 30, fontSize: 15 }}>{phim.tenPhim}</h3>
              <p style={{ height: 100 }}>
                {phim.moTa.length > 100
                  ? phim.moTa.substr(0, 100) + "..."
                  : phim.moTa}
              </p>
              <button className="btn btn-success">Đặt vé</button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center display-4">Danh sách phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
