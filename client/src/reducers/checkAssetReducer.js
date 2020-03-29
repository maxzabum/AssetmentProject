import { GET_CHECK, ADD_CHECK, CHECKS_LOADING } from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHECK:
      return {
        ...state,
        items: action.payload,
        loading: false,
        check: "eiei4555s"
      };

    case CHECKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
