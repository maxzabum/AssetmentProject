import { GET_TYPES, ADD_TYPE, TYPES_LOADING, TYPE_UPDATE } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import axios from "axios";
export const getItemTypes = () => dispacth => {
  dispacth(setTypesLoading());
  axios.get("/api/types").then(res =>
    dispacth({
      type: GET_TYPES,
      payload: res.data,
      check: "eiei"
    })
  );
};

export const updateType = item => (dispacth, getState) => {
  axios
    .patch(`/api/types/${item._id}`, item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: TYPE_UPDATE,
        payload: item,
        id: item._id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};

export const addType = item => dispacth => {
  axios.post("/api/types", item).then(res =>
    dispacth({
      type: ADD_TYPE,
      payload: res.data
    })
  );
};

export const setTypesLoading = () => {
  return {
    type: TYPES_LOADING
  };
};
