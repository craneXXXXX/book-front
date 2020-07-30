import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import flagReducer from "../reducer/flagReducer";

let fn = combineReducers({
  flagObj: flagReducer,
});
let store = createStore(fn);
export default store;
