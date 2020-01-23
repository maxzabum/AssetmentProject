import {
  GET_ROOMS,
  ROOMS_LOADING,
  DELETE_ROOM,
  ADD_ROOM,ROOM_UPDATE
} from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        check: "eiei5"
      };

    case DELETE_ROOM:
      return {
        ...state,
        items: state.items.filter(item => item._id != action.payload)
      };
    case ADD_ROOM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
      case ROOM_UPDATE:
        return {
          ...state,
          items: state.items.filter(item => item._id != action.payload._id)
        };
    case ROOMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
