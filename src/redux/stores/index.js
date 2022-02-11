import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { data } from "../../data";
import reducer, { state } from "../reducers/task-reducer";

import rootReducer from '../reducers';
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// const persistedState = { users: data }
// const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(()=>{})
export default store;
// export default connect(mapStateToProps, mapDispatchToProps)(ReactComponent);