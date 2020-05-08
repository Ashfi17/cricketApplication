import React, { Component } from "react";
import "../assets/styles/MatchSecondaryNavbar.css";
import Profile_Image from "../assets/images/cricket-player.png";

export default class MatchSecondaryNavbar extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div className="matchSecNavHead">
          <div className="match-score-details">
            <span id="match-result" style={{ fontSize: "14px" }}>
              Outcome:{" "}
              <b id="match-winner-name-runs" style={{ color: "#2980B9" }}>
                {this.props.match ? this.props.match.outcome : ""}
              </b>
            </span>
            <div className="match-team-score">
              <span>{this.props.match ? this.props.match.team_one : ""}</span>
              <span>
                {this.props.match ? this.props.match.team_one_runs : ""}/
                {this.props.match ? this.props.match.team_one_wicket : ""}
              </span>
            </div>
            <div className="match-team-score">
              <span>{this.props.match ? this.props.match.team_two : ""}</span>
              <span>
                {this.props.match ? this.props.match.team_two_runs : ""}/
                {this.props.match ? this.props.match.team_two_wicket : ""}
              </span>
            </div>
          </div>
          <div className="match-pom">
            <span style={{ fontSize: "14px" }}>Player of the match</span>
            <div className="pom-detail-div">
              <div
                style={{
                  backgroundImage: `url(${Profile_Image})`, // singlePlayer is an array which consists of an object with playerimage , 0 is the position of the object in the array
                }}
              ></div>
              <div className="pom-name-country">
                <span>
                  {" "}
                  {this.props.match ? this.props.match.player_of_the_match : ""}
                </span>
                <span>
                  {this.props.match ? this.props.match.match_winner : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
