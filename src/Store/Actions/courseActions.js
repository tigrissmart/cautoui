import * as actionTypes from "./actionTypes";
import axios from "../../Libs/Cautoapi";

export const changeCourse = (course) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_COURSE, payload: course });
};

export const fetchCourses=(page,size)=>async dispatch=>{
    dispatch({type:actionTypes.FETCH_COURSES_REQUESTED});
    try{
  
     let url=`/courses/pagination?page=${page}&size=${size}`;
      const response = await axios.get(url);
      dispatch({type:actionTypes.FETCH_COURSES_SUCCESS,payload:response.data});
    }
    catch(e)
    {
      dispatch({type:actionTypes.FETCH_COURSES_FAILED});
    }
  }
/*
export const fetchCourses = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_COURSES_REQUESTED });
  try {
    const response = await axios.get("/courses");
    dispatch({ type: actionTypes.FETCH_COURSES_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_COURSES_FAILED });
  }
};
*/
export const fetchCourse = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_COURSE_REQUESTED });
  try {
    const response = await axios.get(`/courses/${id}`);
    dispatch({ type: actionTypes.FETCH_COURSE_SUCCESS, payload: response.data });
  } catch(e) {
    dispatch({ type: actionTypes.FETCH_COURSE_FAILED,payload:'Error on fetching course' });
  }
};

export const newCourse = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_COURSE });
};

export const saveCourse = (course) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_COURSE_REQUESTED });
  try {
    const response = await axios.post(`/courses`, course);
    dispatch({ type: actionTypes.SAVE_COURSE_SUCCESS, payload: response.data });
    return Promise.resolve(response.data);
  } catch(e) {
    dispatch({ type: actionTypes.SAVE_COURSE_FAILED });

  }
};

export const updateCourse = (course) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_COURSE_REQUESTED });
  try {
    await axios.put(`/courses/${course.id}`, course);
    dispatch({ type: actionTypes.UPDATE_COURSE_SUCCESS, payload: course });
  } catch(e) {
    dispatch({ type: actionTypes.UPDATE_COURSE_FAILED });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_COURSE_REQUESTED });
  try {
    await axios.delete(`/courses/${id}`);
    dispatch({ type: actionTypes.DELETE_COURSE_SUCCESS, payload: id });
  } catch(e) {
    dispatch({ type: actionTypes.DELETE_COURSE_FAILED });
  }
};
