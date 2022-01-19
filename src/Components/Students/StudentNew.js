import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useDispatch,useSelector } from "react-redux";
import { saveStudent,fetchStudents } from "../../Store/Actions/studentActions";
import { closeModal } from "../../Store/Actions/modalActions";
import { useNavigate  } from "react-router-dom";
const StudentNew = () => {
  const navigate = useNavigate ();
 
  const dispatch = useDispatch();
  const initialValues = {
    no: "",
    firstname:"",
    lastname:"",
    address: "",
  };

  const handleSubmit =(formProps) => {
    const { no,firstname, lastname,description} = formProps;
    dispatch(saveStudent(formProps)
    ).then(() => {dispatch(fetchStudents(0,20));})
    .then(()=>{dispatch(closeModal());})
    .then(() => {navigate("/student-list");})
    
  };
  

  
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
     
      >
      {StudentForm}
    </Formik>
  );
};

export default StudentNew;
