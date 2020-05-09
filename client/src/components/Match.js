import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";

import "../assets/styles/Match.css";
import { connect } from "react-redux";
import { getAllRecentMatches } from "../actions/Matche";

export class Match extends Component {
  componentDidMount() {
    this.props.getAllRecentMatches();
  }
  render() {
    return (
      <div>
        <Navbar pageLink={"matches"} />

        <div className="match-card-container">
          {this.props.matches
            ? this.props.matches.map((match, index) => (
                <div id="match-card-id" className="match-card" key={index}>
                  <div className="match-score-div">
                    <div>
                      <span id="team-one" style={{ color: "#2980B9" }}>
                        {match.team_one}
                      </span>
                      <span id="team-two" style={{ color: "#2980B9" }}>
                        {match.team_two}
                      </span>
                      <span>{match.outcome}</span>
                      <span>{match.match_date.slice(0, 10)}</span>
                    </div>
                    <div>
                      <span id="team-one-runs">
                        {match.team_one_runs}/{match.team_one_wicket}
                      </span>
                      <span id="team-two-runs">
                        {match.team_two_runs}/{match.team_two_wicket}
                      </span>
                      <button
                        onClick={() => {
                          this.props.history.push(
                            "/match-summary/" + match.match_no
                          );
                        }}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
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
  getAllRecentMatches,
})(Match);
