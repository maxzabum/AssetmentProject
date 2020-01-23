import {
  GET_ROOMS,
  ROOMS_LOADING,
  ADD_ROOM,
  DELETE_ROOM,
  ROOM_UPDATE
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getRooms = () => dispacth => {
  dispacth(setRoomsLoading());
  axios.get("/api/rooms").then(res =>
    dispacth({
      type: GET_ROOMS,
      payload: res.data,
      check: "eiei"
    })
  );
};

export const deleteRoom = _id => (dispacth, getState) => {
  axios
    .delete(`/api/rooms/${_id}`, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: DELETE_ROOM,
        payload: _id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const updateRoom = item => (dispacth, getState) => {
  axios
    .patch(`/api/rooms/${item._id}`, item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: ROOM_UPDATE,
        payload: item,
        id: item._id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const addRoom = item => (dispacth, getState) => {
  axios
    .post("/api/rooms", item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: ADD_ROOM,
        payload: res.data
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};

export const setRoomsLoading = () => {
  return {
    type: ROOMS_LOADING
  };
};
