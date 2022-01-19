import React from "react";
import { Formik } from "formik";

import TeacherForm from "./TeacherForm";
import { useDispatch,useSelector } from "react-redux";
import { saveTeacher,fetchTeachers } from "../../Store/Actions/teacherActions";
import { closeModal } from "../../Store/Actions/modalActions";
import { useNavigate  } from "react-router-dom";
const TeacherNew = () => {
  const navigate = useNavigate ();
 
  const dispatch = useDispatch();
  const initialValues = {
    firstname:"",
    lastname:"",

  };

  const handleSubmit =(formProps) => {
    const { firstname, lastname} = formProps;
    dispatch(saveTeacher(formProps)
    ).then(() => {dispatch(fetchTeachers(0,20));})
    .then(()=>{dispatch(closeModal());})
    .then(() => {navigate("/teacher-list");})
    
  };
  

  
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
     
      >
      {TeacherForm}
    </Formik>
  );
};

export default TeacherNew;
