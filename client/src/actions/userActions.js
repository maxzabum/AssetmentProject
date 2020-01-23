import { USERS_LOADING, GET_USERS, ADD_USER, USER_UPDATE } from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getUsers = () => dispacth => {
  dispacth(setUsersLoading());
  axios
    .get("/api/users")
    .then(res =>
      dispacth({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
// export const deleteItem = _id => (dispacth, getState) => {
//   axios
//     .delete(`/api/assets/${_id}`, tokenConfig(getState))
//     .then(res =>
//       dispacth({
//         type: DELETE_ITEM,
//         payload: _id
//       })
//     )
//     .catch(err =>
//       dispacth(returnErrors(err.response.data, err.response.status))
//     );
// };
export const updateUser = item => (dispacth, getState) => {
  axios
    .patch(`/api/users/${item._id}`, item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: USER_UPDATE,
        payload: item,
        id: item._id
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const addUser = item => (dispacth, getState) => {
  axios
    .post("/api/users", item, tokenConfig(getState))
    .then(res =>
      dispacth({
        type: ADD_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispacth(returnErrors(err.response.data, err.response.status))
    );
};
export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};
