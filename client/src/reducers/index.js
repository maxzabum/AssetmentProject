import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import assetReducer from "./assetReducer";
import typeReducer from "./itemTypesReducer";
import roomReducer from "./roomReducer";
import checkAssReducer from "./checkAssetReducer";
import fixAssetReducer from "./fixAssetReducer";
import ownersReducer from "./ownerReducer";
import userReducer from "./userReducer";
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  item: assetReducer,
  itemType: typeReducer,
  room: roomReducer,
  fixAsset: fixAssetReducer,
  owners: ownersReducer,
  users: userReducer,
  checkAsset: checkAssReducer
});
