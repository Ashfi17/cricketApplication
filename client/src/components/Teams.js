import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import "../assets/styles/Teams.css";
import { getAllTeams } from "../actions/Teams";
import { connect } from "react-redux";
export class Teams extends Component {
  componentDidMount() {
    this.props.getAllTeams();
  }
  render() {
    return (
      <div>
        <Navbar pageLink={"teams"} />
        <div className="container-team">
          <div className="grid-container-team">
            {this.props.teams
              ? this.props.teams.map((team) => (
                  <div className="team-card">
                    <h1 className="team-name">{team.team_name}</h1>
                    <div className="team-info">
                      <h3>Total Matches : 20</h3>
                      <h3>Ranking : 2</h3>
                    </div>
                    <button
                      className="view-team-button"
                      onClick={() => {
                        this.props.history.push("/players/" + team.team_name);
                      }}
                    >
                      View Players
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teamReducer.teams,

  teamErrorMessage: state.teamReducer.teamErrorMessage,
});

export default connect(mapStateToProps, {
  getAllTeams,
})(Teams);
