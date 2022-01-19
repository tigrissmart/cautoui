import React from "react";
import { useSelector } from "react-redux";
import StudentNewModal from "../Components/Students/StudentNewModal";
import StudentEditModal from "../Components/Students/StudentEditModal";
import TeacherNewModal from "../Components/Teachers/TeacherNewModal";
import TeacherEditModal from "../Components/Teachers/TeacherEditModal";

const ModalManager = () => {
  const modalLookup = {StudentNewModal,StudentEditModal,TeacherNewModal,TeacherEditModal};
  const currentModal = useSelector((state) => state.modalReducer);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
