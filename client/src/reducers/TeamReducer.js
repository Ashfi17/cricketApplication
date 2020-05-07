import { ALL_TEAMS, PLAYERS_OF_TEAM, TEAM_ERROR } from "../actions/Types";

const initialState = {
  teams: [],
  players: [],
  teamErrorMessage: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_TEAMS:
      return { ...state, teams: action.payload };
    case PLAYERS_OF_TEAM:
      return { ...state, players: action.payload };
    case TEAM_ERROR:
      return { ...state, teamErrorMessage: action.payload };
    default:
      return { ...state };
  }
}
