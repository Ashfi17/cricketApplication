import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./components/Teams";
import Player from "./components/Players";
import PlayerInfo from "./components/PlayerInfo";
import Match from "./components/Match";
import MatchDetail from "./components/MatchDetail";
import PointsTable from "./components/PointsTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/teams" component={Team} />
        <Route exact path="/players/:team_name" component={Player} />
        <Route exact path="/playerInfo/:player_name" component={PlayerInfo} />
        <Route exact path="/" component={Match} />
        <Route exact path="/match-summary/:match_no" component={MatchDetail} />
        <Route exact path="/points-table" component={PointsTable} />
      </Router>
    </div>
  );
}

export default App;
