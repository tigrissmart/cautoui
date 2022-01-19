
import * as actionTypes from "../Actions/actionTypes";

const initialState = null;
  
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      const {modalType,modalProps} = action.payload;
      return { modalType,modalProps};
    case actionTypes.CLOSE_MODAL:
      return null; 
    default:
      return state;
  }
  };
  
  export default modalReducer;