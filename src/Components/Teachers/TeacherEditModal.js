import React from "react";
import ModalWrapper from "../../Libs/ModalWrapper";
import TeacherEdit from "./TeacherEdit";

const TeacherEditModal = (props) => {
  return (
    <ModalWrapper title="Teacher Edit">
      <TeacherEdit />
    </ModalWrapper>
  );
};
export default TeacherEditModal;
