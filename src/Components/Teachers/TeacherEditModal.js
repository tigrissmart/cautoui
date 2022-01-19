import React from "react";
import ModalWrapper from "../../Libs/ModalWrapper";
import TeacherEdit from "./TeacherEdit";

const StudentEditModal = (props) => {
  return (
    <ModalWrapper title="Student Edit">
      <TeacherEdit />
    </ModalWrapper>
  );
};
export default StudentEditModal;
