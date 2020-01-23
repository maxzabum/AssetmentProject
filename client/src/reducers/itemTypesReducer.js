import {
  GET_TYPES,
  ADD_TYPE,
  TYPES_LOADING,
  TYPE_UPDATE
} from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        items: action.payload,
        loading: false,
        check: "eiei4"
      };

    case TYPE_UPDATE:
      return {
        ...state,
        items: state.items.filter(item => item._id != action.payload._id)
      };

    case ADD_TYPE:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case TYPES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
