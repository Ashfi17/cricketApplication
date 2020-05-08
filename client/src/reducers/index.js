import { combineReducers } from "redux";
import teamReducer from "./TeamReducer";
import matchReducer from "./MatchesReducer";

export default combineReducers({
  teamReducer: teamReducer,
  matchReducer: matchReducer,
});
