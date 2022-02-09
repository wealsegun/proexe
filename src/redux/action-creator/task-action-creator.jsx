import * as actionTypes from "../actions/actionTypes";

export const getAllTask = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TASK_LIST_LOADING });
  try {
    //   api
    if (data.status) {
      dispatch({ type: actionTypes.GET_TASK_LIST_SUCCESS, payload: data });
    }
  } catch (err) {}
};

export const createNewTask = (data) => {
  return {
    type: actionTypes.SET_TASK_CREATION_STATE,
    payload: {
      Id: data.Id,
      Name: data.Name,
      Username: data.Username,
      City: data.City,
      Email: data.Email,
    },
  };
};

// Reloading the success task created
export const revealTaskSuccess = (data) => {
  return {
    type: actionTypes.TASK_CREATION_SUCCESS,
    payload: data,
  };
};

export const updatTask = (Id, Name, Username, City, Email) => {
  return {
    type: actionTypes.UPDATE_TASK_STATE,
    payload: {
      userProfile: {
        Id: Id,
        Name: Name,
        Username: Username,
        City: City,
        Email: Email,
      },
    },
  };
};

// Reloading the success task created
export const revealTaskUpdateSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_TASK_SUCCESS,
    payload: data,
  };
};

//   Delete Task from the data.json
export const taskDeleted = (data) => {
  return {
    type: actionTypes.DELETE_TASK_STATE,
    payload: data,
    // isDeleted: true
  };
};

// Reloading the success task created
export const revealDeletedSuccess = (data) => {
  return {
    type: actionTypes.DELETE_TASK_SUCCESS,
    payload: data,
  };
};
