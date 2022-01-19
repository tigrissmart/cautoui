import * as actionTypes from "./actionTypes";
import axios from "../../Libs/Cautoapi";

export const changeStudent = (student) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_STUDENT, payload: student });
};

export const fetchStudents=(page,size)=>async dispatch=>{
    dispatch({type:actionTypes.FETCH_STUDENTS_REQUESTED});
    try{
  
     let url=`/students/pagination?page=${page}&size=${size}`;
      const response = await axios.get(url);
      dispatch({type:actionTypes.FETCH_STUDENTS_SUCCESS,payload:response.data});
    }
    catch(e)
    {
      dispatch({type:actionTypes.FETCH_STUDENTS_FAILED});
    }
  }
/*
export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_STUDENTS_REQUESTED });
  try {
    const response = await axios.get("/students");
    dispatch({ type: actionTypes.FETCH_STUDENTS_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_STUDENTS_FAILED });
  }
};
*/
export const fetchStudent = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_STUDENT_REQUESTED });
  try {
    const response = await axios.get(`/students/${id}`);
    dispatch({ type: actionTypes.FETCH_STUDENT_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_STUDENT_FAILED,payload:'Error on fetching student' });
  }
};

export const newStudent = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_STUDENT });
};

export const saveStudent = (student) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_STUDENT_REQUESTED });
  try {
    const response = await axios.post(`/students`, student);
    dispatch({ type: actionTypes.SAVE_STUDENT_SUCCESS, payload: response.data });
    return Promise.resolve(response.data);
  } catch(e) {
    dispatch({ type: actionTypes.SAVE_STUDENT_FAILED });

  }
};

export const updateStudent = (student) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_STUDENT_REQUESTED });
  try {
    await axios.put(`/students/${student.id}`, student);
    dispatch({ type: actionTypes.UPDATE_STUDENT_SUCCESS, payload: student });
  } catch(e) {
    dispatch({ type: actionTypes.UPDATE_STUDENT_FAILED });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_STUDENT_REQUESTED });
  try {
    await axios.delete(`/students/${id}`);
    dispatch({ type: actionTypes.DELETE_STUDENT_SUCCESS, payload: id });
  } catch(e) {
    dispatch({ type: actionTypes.DELETE_STUDENT_FAILED });
  }
};
