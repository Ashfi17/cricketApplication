import React, { Component } from "react";
import Navbar from "../reusableComponents/Navbar";
import "../assets/styles/PointsTabe.css";

export default class PointsTable extends Component {
  render() {
    const data = [
      {
        team_name: "India",
        matches_played: 9,
        matches_won: 7,
        matches_lost: 1,
        points: 15,
      },
      {
        team_name: "Australia",
        matches_played: 9,
        matches_won: 7,
        matches_lost: 2,
        points: 14,
      },
      {
        team_name: "England",
        matches_played: 9,
        matches_won: 6,
        matches_lost: 3,
        points: 12,
      },
      {
        team_name: "New Zealand",
        matches_played: 9,
        matches_won: 5,
        matches_lost: 3,
        points: 11,
      },
      {
        team_name: "Pakistan",
        matches_played: 9,
        matches_won: 5,
        matches_lost: 3,
        points: 11,
      },
      {
        team_name: "Sri Lanka",
        matches_played: 9,
        matches_won: 3,
        matches_lost: 4,
        points: 8,
      },
      {
        team_name: "South Africa",
        matches_played: 9,
        matches_won: 3,
        matches_lost: 5,
        points: 7,
      },
      {
        team_name: "Bangladesh",
        matches_played: 9,
        matches_won: 3,
        matches_lost: 5,
        points: 7,
      },
      {
        team_name: "West Indies",
        matches_played: 9,
        matches_won: 2,
        matches_lost: 6,
        points: 5,
      },
    ];
    return (
      <div>
        <Navbar pageLink={"points-table"} />
        {/* <div className="point-table-container">
          <div className="point-table-header">
            <span>Points Table</span>
          </div>
          <div className="point-table-column-header">
            <span>Team</span>
            <span>Matches</span>
            <span>Won</span>
            <span>Lost</span>
            <span>Point</span>
          </div>
          {data.map((team) => (
            <div className="point-table-column-data">
              <span>{team.team_name}</span>
              <span>{team.matches_played}</span>
              <span>{team.matches_won}</span>
              <span>{team.matches_lost}</span>
              <span>{team.points}</span>
            </div>
          ))}
        </div> */}
        <div className="point-table-container">
          <div className="point-table-header">
            <span>Points Table</span>
          </div>
          <table>
            <tr>
              <th>Teams</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Point</th>
            </tr>
            {data.map((team) => (
              <tr className="table-data">
                <td>{team.team_name}</td>
                <td>{team.matches_played}</td>
                <td>{team.matches_won}</td>
                <td>{team.matches_lost}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
