import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ITEM_UPDATE,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getItems = () => (dispacth) => {
  dispacth(setItemsLoading());

  return Promise.resolve(
    axios
      .get("/api/assets")
      .then((res) =>
        dispacth({
          type: GET_ITEMS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispacth(returnErrors(err.response.data, err.response.status))
      )
  );
};
export const deleteItem = (_id) => (dispacth, getState) => {
  axios
    .delete(`/api/assets/${_id}`, tokenConfig(getState))
    .then((res) =>
      dispacth({
        type: DELETE_ITEM,
        payload: _id,
      })
    )
    .catch((err) =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const updateItem = (item) => (dispacth, getState) => {
  axios
    .patch(`/api/assets/${item._id}`, item, tokenConfig(getState))
    .then((res) =>
      dispacth({
        type: ITEM_UPDATE,
        payload: item,
        id: item._id,
      })
    )
    .catch((err) =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const addItem = (item) => (dispacth, getState) => {
  axios
    .post("/api/assets", item, tokenConfig(getState))
    .then((res) =>
      dispacth({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
