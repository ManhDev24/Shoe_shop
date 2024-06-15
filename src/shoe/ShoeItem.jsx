import React, { Component } from "react";

export default class ShoeItem extends Component {
  renderShoe = () => {
    const { data, handleShoe } = this.props;
    return data.map((shoe) => {
      return (
        <div className="col-3 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={shoe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{shoe.name}</h5>
              <p className="card-text">{shoe.shortDescription}</p>
              <button
                onClick={() => {
                  handleShoe(shoe);
                }}
                className="btn btn-success py-2 mx-2"
              >
                Add me
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row text-center">{this.renderShoe()}</div>;
  }
}
