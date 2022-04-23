import React, { useState } from "react";

export default function BaiTapChonXe() {
  
  let arrCar = ["red", "black", "silver"];
  let [car, setCar] = useState('red');
  return (
    <div className="row">
      <div className="col-6">
        <img src={`./img/${car}-car.jpg`}width={`100%`} alt="" />
      </div>
      <div className="col-6 row">
        {arrCar.map((car, index) => {
          return (
            <div className="col-4" key={index}>
              <img onClick={() => {
                  setCar(car);
              }} src={`./img/${car}-car.jpg`} width={`100%`} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
