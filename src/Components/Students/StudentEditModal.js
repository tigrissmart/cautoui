import React from "react";
import ModalWrapper from "../../Libs/ModalWrapper";
import StudentEdit from "./StudentEdit";

const StudentEditModal = (props) => {
  return (
    <ModalWrapper title="Student Edit">
      <StudentEdit />
    </ModalWrapper>
  );
};
export default StudentEditModal;
