import { DUMMY_TYPE } from "../actions/Types";

const initialState = {
  test: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DUMMY_TYPE:
      return { ...state, test: action.payload };
    default:
      return { ...state };
  }
}
