import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  modalReducer,
  studentReducer,
  teacherReducer,
  courseReducer

});

export default rootReducer;
