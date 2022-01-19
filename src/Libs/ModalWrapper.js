import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { closeModal } from "../Store/Actions/modalActions";

const ModalWrapper = ({children,title}) => {
  
  const dispatch = useDispatch();
  
  const onCloseClick=()=>{
    dispatch(closeModal());
  }

  return (

        <Modal visible={true} onCancel={onCloseClick} title={title} destroyOnClose={true} footer={false}>
          {children}
        </Modal>

  );
};

export default ModalWrapper;
