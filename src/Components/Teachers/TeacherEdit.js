import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacher,fetchTeachers } from "../../Store/Actions/teacherActions";
import { closeModal} from "../../Store/Actions/modalActions";
import { Formik } from "formik";
import TeacherForm from "./TeacherForm";
import { useNavigate  } from "react-router-dom";

const TeacherEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const teacher = useSelector((state) => state.teacherReducer.currentTeacher);
  const currentPageNumber = useSelector((state) => state.teacherReducer.teachers.number);

  const formValues = {
    id: teacher.id,
    firstname: teacher.firstname,
    lastname: teacher.lastname,
  };


  const handleSubmit = (formProps) => {
    const { firstname,lastname} = formProps;
    dispatch(updateTeacher(formProps))
      .then(() => {
        dispatch(fetchTeachers(currentPageNumber, 20));
      })
      .then(() => {
        dispatch(closeModal());
      })
      .then(() => {
        navigate("/teacher-list");
      });
  };

  return (
    <div>
      <Formik initialValues={formValues} onSubmit={handleSubmit}>
        {TeacherForm}
      </Formik>
    </div>
  );
};

export default TeacherEdit;
