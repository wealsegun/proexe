// import { data } from "../../data";
import * as actionTypes from "../actions/actionTypes";
import TaskDataService from "../../services/task.service";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_USERS_LOADING });
  try {
    const res = await TaskDataService.getAll();
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: actionTypes.GET_USERS_ERROR });
  }
};

export const createNewUser = (data) => async (dispatch) => {
  try {
    const res = await TaskDataService.create(data);
    dispatch({
      type: actionTypes.CREATE_USER_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatTask =
  (Id, Name, Username, City, Email) => async (dispatch) => {
    try {
      const data = {
        Id: Id,
        Name: Name,
        Username: Username,
        City: City,
        Email: Email,
      };
      const res = TaskDataService.update(Id, data);
      dispatch({
        type: actionTypes.UPDATE_USER_SUCCESS,
        payload: (await res).data,
      });
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

//   Delete Task from the data.json
export const taskDeleted = (id) => (dispatch) => {
  try {
    const res = TaskDataService.delete(id)
    dispatch( {
      type: actionTypes.DELETE_USER_SUCCESS,
      payload: res.data,
      // isDeleted: true
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
