import { GET_OWNERS, OWNERS_LOADING, OWNER_UPDATE } from "../actions/types";
const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OWNERS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case OWNER_UPDATE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id)
      };
    // case ADD_ROOM:
    //   return {
    //     ...state,
    //     items: [action.payload, ...state.items]
    //   };

    case OWNERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
