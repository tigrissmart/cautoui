import * as actionTypes from "./actionTypes";

export const openModal = (payload) =>(dispatch) => {
    dispatch({ type: actionTypes.OPEN_MODAL,payload });
  };

  export const closeModal = () => (dispatch) => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };