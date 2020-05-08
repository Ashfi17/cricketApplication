import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import "../assets/styles/Players.css";
import { getTeamPlayer } from "../actions/Teams";
import Profile_Image from "../assets/images/cricket-player.png";
import { connect } from "react-redux";

export class Players extends Component {
  componentDidMount() {
    this.props.getTeamPlayer(this.props.match.params.team_name);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-player">
          <div className="grid-container-player">
            {this.props.players
              ? this.props.players.map((player) => (
                  <div
                    className="player-card"
                    onClick={() => {
                      this.props.history.push("/playerInfo/dummy", {
                        player_name: player.player_name,
                        dob: player.player_dob,
                        role: player.player_role,
                        country: player.player_country,
                      });
                    }}
                  >
                    <img
                      src={Profile_Image}
                      alt="player_profile"
                      className="player-image"
                    />
                    <h1 className="player-name">{player.player_name}</h1>
                    <h3 className="player-role">{player.player_role}</h3>
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
