import {
  GET_FIXS,
  FIXS_LOADING,
  ADD_FIX,
  DELETE_FIX,
  FIX_UPDATE
} from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FIXS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        check: "eieiReFix"
      };

    case FIX_UPDATE:
      return {
        ...state,
        items: state.items.filter(item => item._id != action.payload._id)
      };
    case ADD_FIX:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case FIXS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
