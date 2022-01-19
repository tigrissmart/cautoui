import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse,fetchCourses } from "../../Store/Actions/courseActions";
import { closeModal} from "../../Store/Actions/modalActions";
import { Formik } from "formik";
import CourseForm from "./CourseForm";
import { useNavigate  } from "react-router-dom";

const CourseEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const course = useSelector((state) => state.courseReducer.currentCourse);
  const currentPageNumber = useSelector((state) => state.courseReducer.courses.number);

  const formValues = {
    id: course.id,
    name: course.name,
    description: course.description,
  };


  const handleSubmit = (formProps) => {
    const { name,description} = formProps;
    dispatch(updateCourse(formProps))
      .then(() => {
        dispatch(fetchCourses(currentPageNumber, 20));
      })
      .then(() => {
        dispatch(closeModal());
      })
      .then(() => {
        navigate("/course-list");
      });
  };

  return (
    <div>
      <Formik initialValues={formValues} onSubmit={handleSubmit}>
        {CourseForm}
      </Formik>
    </div>
  );
};

export default CourseEdit;
