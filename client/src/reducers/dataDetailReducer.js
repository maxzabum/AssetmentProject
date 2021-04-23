import {
  SET_ASSET_DETAIL,
  SET_FIXASSET_DETAIL,
  SET_USER_DETAIL,
} from "../actions/types";
const initialState = {
  item: [],
};
export default function (state = initialState, actions) {
  switch (actions.type) {
    case SET_ASSET_DETAIL:
      console.log(actions);
      return {
        ...state,
        item: actions.payload,
      };

    default:
      return state;
  }
}
