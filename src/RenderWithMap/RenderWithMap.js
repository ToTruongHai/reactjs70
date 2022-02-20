import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "iphone x",
      price: 1000,
      img: "https://i.pravatar.cc/200?u=1",
    },
    {
      id: 2,
      name: "iphone xs",
      price: 2000,
      img: "https://i.pravatar.cc/200?u=2",
    },
    {
      id: 3,
      name: "iphone xs max",
      price: 3000,
      img: "https://i.pravatar.cc/200?u=3",
    },
  ];

  RenderProduct = () => {
    //   first method
    /*
        let arrTagProduct = [];
        for (let product of this.arrProduct) {
        let objTrJSX = (
            <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <img src={product.img} width={50} />
            </td>
            </tr>
        );
        arrTagProduct.push(objTrJSX);
        }
        return arrTagProduct;
    */
    //    second method
    let arrTagJSX = this.arrProduct.map((product, index) => {
      // de key vao de khong bi loi^~ key va` try xuat de dang hon
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} width={50} />
          </td>
        </tr>
      );
    });
    return arrTagJSX;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>{this.RenderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
