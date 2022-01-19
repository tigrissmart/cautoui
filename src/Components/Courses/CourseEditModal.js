import React from "react";
import ModalWrapper from "../../Libs/ModalWrapper";
import CourseEdit from "./CourseEdit";

const CourseEditModal = (props) => {
  return (
    <ModalWrapper title="Course Edit">
      <CourseEdit />
    </ModalWrapper>
  );
};
export default CourseEditModal;
