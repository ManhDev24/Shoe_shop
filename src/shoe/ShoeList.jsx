import React, { Component } from "react";
import ShoeItem from "./ShoeItem";

export default class ShoeList extends Component {
  render() {
    return (
      <div className="m-3 ">
        <h1 className="text-center">Shoe shop</h1>
        <div className="d-flex justify-content-center">
          <div className="row  m-4">
            <ShoeItem
              data={this.props.data}
              handleShoe={this.props.handleShoe}
            />
          </div>
        </div>
      </div>
    );
  }
}
