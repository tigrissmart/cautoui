import * as actionTypes from "./actionTypes";
import axios from "../../Libs/Cautoapi";

export const changeTeacher = (teacher) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_TEACHER, payload: teacher });
};

export const fetchTeachers=(page,size)=>async dispatch=>{
    dispatch({type:actionTypes.FETCH_TEACHERS_REQUESTED});
    try{
  
     let url=`/teachers/pagination?page=${page}&size=${size}`;
      const response = await axios.get(url);
      dispatch({type:actionTypes.FETCH_TEACHERS_SUCCESS,payload:response.data});
    }
    catch(e)
    {
      dispatch({type:actionTypes.FETCH_TEACHERS_FAILED});
    }
  }
/*
export const fetchTeachers = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TEACHERS_REQUESTED });
  try {
    const response = await axios.get("/teachers");
    dispatch({ type: actionTypes.FETCH_TEACHERS_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_TEACHERS_FAILED });
  }
};
*/
export const fetchTeacher = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TEACHER_REQUESTED });
  try {
    const response = await axios.get(`/teachers/${id}`);
    dispatch({ type: actionTypes.FETCH_TEACHER_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_TEACHER_FAILED,payload:'Error on fetching teacher' });
  }
};

export const newTeacher = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_TEACHER });
};

export const saveTeacher = (teacher) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_TEACHER_REQUESTED });
  try {
    const response = await axios.post(`/teachers`, teacher);
    dispatch({ type: actionTypes.SAVE_TEACHER_SUCCESS, payload: response.data });
    return Promise.resolve(response.data);
  } catch(e) {
    dispatch({ type: actionTypes.SAVE_TEACHER_FAILED });

  }
};

export const updateTeacher = (teacher) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_TEACHER_REQUESTED });
  try {
    await axios.put(`/teachers/${teacher.id}`, teacher);
    dispatch({ type: actionTypes.UPDATE_TEACHER_SUCCESS, payload: teacher });
  } catch(e) {
    dispatch({ type: actionTypes.UPDATE_TEACHER_FAILED });
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_TEACHER_REQUESTED });
  try {
    await axios.delete(`/teachers/${id}`);
    dispatch({ type: actionTypes.DELETE_TEACHER_SUCCESS, payload: id });
  } catch(e) {
    dispatch({ type: actionTypes.DELETE_TEACHER_FAILED });
  }
};
