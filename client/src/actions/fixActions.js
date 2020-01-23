import {
  GET_FIXS,
  FIXS_LOADING,
  DELETE_FIX,
  ADD_FIX,
  FIX_UPDATE
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getFixs = () => dispacth => {
  dispacth(setFixsLoading());
  axios.get("/api/fixAsset").then(res =>
    dispacth({
      type: GET_FIXS,
      payload: res.data,
      check: "eieiFix"
    })
  );
};

export const deleteFix = _id => (dispacth, getState) => {
  axios
    .delete(`/api/fixAsset/${_id}`, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: DELETE_FIX,
        payload: _id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const updateFix = item => (dispacth, getState) => {
  axios
    .patch(`/api/fixAsset/${item._id}`, item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: FIX_UPDATE,
        payload: item,
        id: item._id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const addFix = ({ item, img }) => (dispacth, getState) => {
  console.log("dsae", item);
  axios
    .post("/api/fixAsset", { item, img }, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: ADD_FIX,
        payload: res.data
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const setFixsLoading = () => {
  return {
    type: FIXS_LOADING
  };
};
