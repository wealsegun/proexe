/* eslint-disable default-case */
// import { data } from "../../data";
import * as actionTypes from "../actions/actionTypes";
import TaskDataService from "../../services/task.service";
import {
  // NotificationContainer,
  NotificationManager,
} from "react-notifications";

export const getAllUsers = () => {
  console.log("method called");
  return async (dispatch) => {
    console.log("action dispatched");
    dispatch({ type: actionTypes.GET_USERS_LOADING });
    try {
      const res = await TaskDataService.getAll();
      console.log(res);
      dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: actionTypes.GET_USERS_ERROR });
    }
  };
};


  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

export const createNewUser = (data) => async (dispatch) => {
  try {
    const res = await TaskDataService.create(data);
    console.log(res);
    console.log(res.status);
    if (res.status === 201) {

      alert(res.data.name + " Successfully created");
      createNotification('success');
    } else {
      NotificationManager.error("Error message", "Click me!", 5000, () => {
        alert("callback");
      });
    }
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
    const res = TaskDataService.delete(id);
    dispatch({
      type: actionTypes.DELETE_USER_SUCCESS,
      payload: res.data,
      // isDeleted: true
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
