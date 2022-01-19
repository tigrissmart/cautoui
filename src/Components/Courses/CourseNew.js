import React from "react";
import { Formik } from "formik";

import CourseForm from "./CourseForm";
import { useDispatch,useSelector } from "react-redux";
import { saveCourse,fetchCourses } from "../../Store/Actions/courseActions";
import { closeModal } from "../../Store/Actions/modalActions";
import { useNavigate  } from "react-router-dom";
const CourseNew = () => {
  const navigate = useNavigate ();
 
  const dispatch = useDispatch();
  const initialValues = {
    firstname:"",
    lastname:"",

  };

  const handleSubmit =(formProps) => {
    const { name, description } = formProps;
    dispatch(saveCourse(formProps)
    ).then(() => {dispatch(fetchCourses(0,20));})
    .then(()=>{dispatch(closeModal());})
    .then(() => {navigate("/course-list");})
    
  };
  

  
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
     
      >
      {CourseForm}
    </Formik>
  );
};

export default CourseNew;
