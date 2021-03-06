import { GET_OWNERS, OWNERS_LOADING, OWNER_UPDATE, ADD_OWNER } from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getOwners = () => dispacth => {
  dispacth(setOwnersLoading());
  axios.get("/api/owners").then(res =>
    dispacth({
      type: GET_OWNERS,
      payload: res.data
    })
  );
};
export const updateOwner = item => (dispacth, getState) => {
  axios
    .patch(`/api/owners/${item._id}`, item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: OWNER_UPDATE,
        payload: item,
        id: item._id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const addOwner = item => (dispacth, getState) => {
  axios
    .post("/api/owners", item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: ADD_OWNER,
        payload: res.data
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const setOwnersLoading = () => {
  return {
    type: OWNERS_LOADING
  };
};
