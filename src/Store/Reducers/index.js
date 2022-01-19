import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";

const rootReducer = combineReducers({
  modalReducer,
  studentReducer,
  teacherReducer,

});

export default rootReducer;
