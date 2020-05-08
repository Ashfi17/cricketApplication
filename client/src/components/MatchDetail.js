import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import MatchSecondaryNavbar from "../reusableComponents/MatchSecondaryNavbar";
import "../assets/styles/MatchDetail.css";
import { getSingleMatch } from "../actions/Matche";

import { connect } from "react-redux";

export class MatchDetail extends Component {
  componentDidMount() {
    this.props.getSingleMatch(this.props.match.params.match_no);
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
  matchErrorMessage: state.matchReducer.matchErrorMessage,
});
export default connect(mapStateToProps, {
  getSingleMatch,
})(MatchDetail);
