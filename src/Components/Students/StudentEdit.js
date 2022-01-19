import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent,fetchStudents } from "../../Store/Actions/studentActions";
import { closeModal} from "../../Store/Actions/modalActions";
import { Formik } from "formik";
import StudentForm from "./StudentForm";
import { useNavigate  } from "react-router-dom";

const NoteEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const student = useSelector((state) => state.studentReducer.currentStudent);
  const currentPageNumber = useSelector((state) => state.studentReducer.students.number);

  const formValues = {
    id: student.id,
    no: student.no,
    firstname: student.firstname,
    lastname: student.lastname,
    address:student.address
  };


  const handleSubmit = (formProps) => {
    const { no, firstname,lastname,address } = formProps;
    dispatch(updateStudent(formProps))
      .then(() => {
        dispatch(fetchStudents(currentPageNumber, 20));
      })
      .then(() => {
        dispatch(closeModal());
      })
      .then(() => {
        navigate("/student-list");
      });
  };

  return (
    <div>
      <Formik initialValues={formValues} onSubmit={handleSubmit}>
        {StudentForm}
      </Formik>
    </div>
  );
};

export default NoteEdit;
