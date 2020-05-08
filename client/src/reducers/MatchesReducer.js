import {
  RECENT_MATCHES_ALL,
  SINGLE_MATCH,
  MATCH_ERROR,
} from "../actions/Types";

const initialState = {
  matches: [],
  matchErrorMessage: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case RECENT_MATCHES_ALL:
      return { ...state, matches: action.payload };
    case SINGLE_MATCH:
      return { ...state, matches: action.payload };

    case MATCH_ERROR:
      return { ...state, matchErrorMessage: action.payload };
    default:
      return { ...state };
  }
}
