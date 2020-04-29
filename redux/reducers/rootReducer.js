import counterReducer from "./counterReducer";
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
});

export default rootReducer;
