import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import MatchSecondaryNavbar from "../reusableComponents/MatchSecondaryNavbar";
import { getTeamPlayer } from "../actions/Teams";

import "../assets/styles/MatchDetail.css";
import { getSingleMatch } from "../actions/Matche";

import { connect } from "react-redux";

export class MatchDetail extends Component {
  componentDidMount() {
    //action call to get the match details
    this.props.getSingleMatch(this.props.match.params.match_no);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.matches !== prevProps.matches) {
      //action call to fetch all the players of the team
      this.props.getTeamPlayer(this.props.matches[0].match_winner);
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#C5C3C6" }}>
        <Navbar />
        <MatchSecondaryNavbar
          match={this.props.matches ? this.props.matches[0] : ""}
        />
        <div className="main-container">
          <div>
            <div className="winner_details">
              <div className="card-header">Winner Detail</div>
              <div className="winner_detail-winning-team">
                <span>Winning Team </span>
                <span>
                  {/* display the name of winner team */}
                  {this.props.matches
                    ? this.props.matches[0]
                      ? this.props.matches[0].match_winner
                      : ""
                    : ""}
                </span>
              </div>
              <div className="winner_detail-players">
                <span>Players In the Match</span>
                {/* checks if the players reducer has some value if yes then populate  */}
                {this.props.players
                  ? this.props.players.map((p) => (
                      <span className="players-list">{p.player_name}</span>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="match_details">
            <div className="card-header">Match Details</div>
            <div className="m-detail">
              <span>Series</span>
              <span>ICC One Day International</span>
            </div>
            <div className="m-detail">
              <span>Date</span>
              <span>
                {/* display match date */}
                {this.props.matches
                  ? this.props.matches[0]
                    ? this.props.matches[0].match_date.slice(0, 10)
                    : "23 feb,2019"
                  : "23 feb,2019"}
              </span>
            </div>
            <div className="m-detail">
              <span>Venue</span>
              <span>
                {/* display venue name */}
                {this.props.matches
                  ? this.props.matches[0]
                    ? this.props.matches[0].venue_name
                    : "Lords"
                  : "Lords"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.matchReducer.matches,
  players: state.teamReducer.players,
  matchErrorMessage: state.matchReducer.matchErrorMessage,
});
export default connect(mapStateToProps, {
  getSingleMatch,
  getTeamPlayer,
})(MatchDetail);
