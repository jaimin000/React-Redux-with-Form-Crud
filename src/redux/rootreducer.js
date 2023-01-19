import { combineReducers } from "redux";
import addDataReducer from "./reducer/addDataReducer";

const rootReducer = combineReducers({
  data: addDataReducer,
});

export default rootReducer;
