import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Teams";
import Player from "./components/Players";
import PlayerInfo from "./components/PlayerInfo";
import Match from "./components/Match";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Team} />
        <Route exact path="/players/:team_name" component={Player} />
        <Route exact path="/playerInfo/:player_name" component={PlayerInfo} />
        <Route exact path="/match" component={Match} />
      </Router>
    </div>
  );
}

export default App;
