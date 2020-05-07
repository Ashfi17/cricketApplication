import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Hello Home</h2>
      </div>
    );
  }
}
