import * as actionTypes from '../actions/actionTypes'

const tasqReducer = (
    store =  {
        task: {
            taskList: [],
            newTaskCreated: []
        },

    },
    action
) => {
    // Get Task List
    if (action.type === actionTypes.TASK_LIST_STATE) {
        return {
          ...store,
          task: {
            ...store.task,
            allTask: action.payload,
          },
        };
      }

      // Get Single Task
      if (action.type === actionTypes.GET_TASK_STATE) {
        return {
          ...store,
          task: {
            ...store.task,
            singleTask: action.payload,
          },
        };
      }

      // Create Single Task
      if (action.type === actionTypes.TASK_CREATION_STATE) {
        return {
          ...store,
          task: {
            ...store.tasq,
            newTaskCreated: [
              ...store.task.newTasqCreated,
              {
                Id: action.payload.Id,
                Name: action.payload.Name,
                Username: action.payload.Username,
                City: action.payload.City,
                Email: action.payload.Email
              },
            ],
          },
        };
      }
    //   Reveal Created Task
      if (action.type === actionTypes.TASK_CREATION_SUCCESS) {
        return {
          ...store,
          task: {
            ...store.task,
            revealTaskSuccess: action.payload,
          },
        };
      }
};

export default tasqReducer;