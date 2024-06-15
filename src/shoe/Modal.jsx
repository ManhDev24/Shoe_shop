import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { shoe } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Alias</th>
              <th>Price</th>
              <th>description</th>
              <th>shortDescription</th>
              <th>Image</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{shoe.name}</td>
              <td>{shoe.Alias}</td>
              <td>{shoe.price}</td>
              <td>{shoe.description}</td>
              <td>{shoe.shortDescription}</td>
              <td>
                <img
                  src={shoe.image}
                  style={{ height: "100px", width: "100px" }}
                ></img>
              </td>
              <td>{shoe.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
