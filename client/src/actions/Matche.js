import { RECENT_MATCHES_ALL, SINGLE_MATCH, MATCH_ERROR } from "./Types";
import config from "../config";
import axios from "axios";
const url = config.url + "match/";

//function to call the api to get all recent matches
export const getAllRecentMatches = () => (dispatch) => {
  return axios
    .get(url + "all/recent")
    .then((res) => {
      dispatch({
        type: RECENT_MATCHES_ALL,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MATCH_ERROR,
        payload: err.response.data.message,
      });
    });
};
//function to call the api to get details of a match
export const getSingleMatch = (match_no) => (dispatch) => {
  return axios
    .get(url + "single-match-detals/" + match_no)
    .then((res) => {
      dispatch({
        type: SINGLE_MATCH,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MATCH_ERROR,
        payload: err.response.data.message,
      });
    });
};
