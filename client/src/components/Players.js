import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import "../assets/styles/Teams.css";
import { getTeamPlayer } from "../actions/Teams";
import { connect } from "react-redux";

export class Players extends Component {
  componentDidMount() {
    this.props.getTeamPlayer(this.props.match.params.team_name);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-team">
          <div className="grid-container-team">
            {this.props.players
              ? this.props.players.map((player) => (
                  <div className="team-card">
                    <h1 className="team-name">{player.player_name}</h1>
                    <div className="team-info">
                      <h3>Total Matches : 20</h3>
                      <h3>Ranking : 2</h3>
                    </div>
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
  players: state.teamReducer.players,
  teamErrorMessage: state.teamReducer.teamErrorMessage,
});

export default connect(mapStateToProps, {
  getTeamPlayer,
})(Players);
