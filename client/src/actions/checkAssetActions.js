import { GET_CHECK, ADD_CHECK, CHECKS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import axios from "axios";
export const getCheckAsset = () => dispacth => {
  dispacth(setCheckLoading());
  axios.get("/api/chAsset").then(res =>
    dispacth({
      type: GET_CHECK,
      payload: res.data,
      check: "eiei4dd"
    })
  );
};

export const addCheckAsset = item => dispacth => {
  axios.post("/api/chAsset", item).then(res =>
    dispacth({
      type: ADD_CHECK,
      payload: res.data
    })
  );
};

export const setCheckLoading = () => {
  return {
    type: CHECKS_LOADING
  };
};
