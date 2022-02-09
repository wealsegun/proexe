import { createStore } from 'redux';
import tasqReducer from './../reducers/task-reducer';

const tasqStore = createStore(tasqReducer);

export default tasqStore;