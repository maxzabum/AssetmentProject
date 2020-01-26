import {
  GET_USERS,
  ADD_USER,
  USERS_LOADING,
  USER_UPDATE
} from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case USER_UPDATE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id)
      };
    case ADD_USER:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
