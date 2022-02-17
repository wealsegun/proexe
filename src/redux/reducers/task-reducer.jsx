import { data } from "../../data";
import * as actionTypes from "../actions/actionTypes";

const initialState = [];
function taskreducer(tasks = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CREATE_USER_SUCCESS:
      return [...tasks, payload];
    case actionTypes.UPDATE_USER_SUCCESS:
      return tasks.map((task) => {
        if (task.id === payload.id) {
          return {
            ...task,
            ...payload,
          };
        } else {
          return task;
        }
      });
    case actionTypes.GET_USERS_SUCCESS:
      return payload;
    case actionTypes.DELETE_USER_SUCCESS:
      return tasks.filter(({ id }) => id !== payload.id);
    default:
      return tasks;
  }
}

export default taskreducer;