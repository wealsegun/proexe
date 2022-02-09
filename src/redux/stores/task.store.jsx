import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./../reducers/task-reducer";

const taskStore = createStore(taskReducer, applyMiddleware(thunk));

export default taskStore;
