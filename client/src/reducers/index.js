import { combineReducers } from "redux";
import teamReducer from "./TeamReducer";

export default combineReducers({
  teamReducer: teamReducer,
});
