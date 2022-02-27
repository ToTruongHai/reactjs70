import React, { Component } from "react";
//import thu vien ket noi voi configStore.js
import { connect } from "react-redux";

class CarModalRedux extends Component {
  render() {
    let car = this.props.carDetailReducer;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={car.img} alt="" className="w-100" height={`300px`} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//ham chuyen doi state tu redux bien doi thanh props cua components
const mapStateTopProps = (rootReducer) => {
  //rootReducer la state tong ung dung
  return {
    carDetailReducer: rootReducer.carDetailReducer,
  };
};

export default connect(mapStateTopProps)(CarModalRedux);
