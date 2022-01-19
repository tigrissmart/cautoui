import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

import studentReducer from "./studentReducer";


const rootReducer = combineReducers({
  modalReducer,
  studentReducer,

});

export default rootReducer;
