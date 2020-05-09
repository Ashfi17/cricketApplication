import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import "../assets/styles/PlayerInfo.css";
import Profile_Image from "../assets/images/cricket-player.png";

export default class PlayerInfo extends Component {
  render() {
    const playerInfo = this.props.history.location.state;
    //calcuating the age of the player
    var date = new Date(playerInfo.dob);
    var ageDifMs = Date.now() - date;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch

    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return (
      <div>
        <Navbar />
        <div className="secNavParent">
          <div className="secNavHead">
            <div
              style={{
                backgroundImage: `url(${Profile_Image})`, // singlePlayer is an array which consists of an object with playerimage , 0 is the position of the object in the array
              }}
            ></div>
            <div>
              <h2>{playerInfo.player_name}</h2>
              {/* display player country */}
              <h4 style={{ textAlign: "left" }}>{playerInfo.country}</h4>
            </div>
          </div>
        </div>
        <div className="mainDiv">
          <p>Personal Details</p>
          <div className="playerinfo">
            <span>Full Name</span>
            {/* display player name */}
            <b>{playerInfo.player_name}</b>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Date Of Birth</span>
                {/* display player DOB */}
                <b>{playerInfo.dob.slice(0, 10)}</b>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "100px",
                }}
              >
                <span>Age </span>
                {/* display player age */}
                <b>{age}</b>
              </div>
            </div>
            <span id="jest-role">Role</span>
            {/* display player role */}
            <b>{playerInfo.role}</b>
            <span id="jest-batting-style">Batting Style</span>
            <b>Right Handed Batsman</b>
            <span id="jest-bowling-style">Bowling Style</span>
            <b>Left Arm slow</b>
          </div>
        </div>
      </div>
    );
  }
}
