import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";

export default class Match extends Component {
  render() {
    return (
      <div>
        <Navbar pageLink={"match"} />
        <h2>Hi, match</h2>
      </div>
    );
  }
}
