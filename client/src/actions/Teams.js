import { ALL_TEAMS, PLAYERS_OF_TEAM, TEAM_ERROR } from "./Types";
import config from "../config";
import axios from "axios";

const url = config.url + "team";

//function to call the api to get all teams data
export const getAllTeams = () => (dispatch) => {
  return axios
    .get(url + "/all-teams")
    .then((res) => {
      dispatch({
        type: ALL_TEAMS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: TEAM_ERROR,
        payload: err.response.data.message,
      });
    });
};
//function to call the api to get players of a team
export const getTeamPlayer = (teamName) => (dispatch) => {
  return axios
    .get(url + "/players/" + teamName)
    .then((res) => {
      dispatch({
        type: PLAYERS_OF_TEAM,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: TEAM_ERROR,
        payload: err.response.data.message,
      });
    });
};
