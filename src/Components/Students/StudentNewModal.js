import React from "react";
import ModalWrapper from "../../Libs/ModalWrapper";
import StudentNew from "./StudentNew";

const StudentNewModal = (props) => {
  return (
    <ModalWrapper title="Student New">
      <StudentNew />
    </ModalWrapper>
  );
};
export default StudentNewModal;
