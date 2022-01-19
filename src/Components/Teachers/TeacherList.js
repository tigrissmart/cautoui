import React, { useEffect, useState } from "react";
import { Table, Space, Popconfirm,Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchTeachers, deleteTeacher ,changeTeacher} from "../../Store/Actions/teacherActions";
import { openModal } from "../../Store/Actions/modalActions";

const { Column } = Table;

const TeacherList = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
   
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => (
        <EditOutlined onClick={() => onRowEditClick(record)} />
      ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (_, record) =>
        teacherReducer.teachers.content.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onRowDeleteClick(record)}
          >
            <DeleteOutlined />
          </Popconfirm>
        ) : null,
    },
  ];
  const dispatch = useDispatch();
  const teacherReducer = useSelector((state) => state.teacherReducer);
  const pageNumber = useSelector((state) => state.teacherReducer.teachers.number);

  const onRowEditClick = (record) => {
    selectTeacher(record);
    openTeacherEditModal(record);
  };
  const onRowDeleteClick = (record) => {
    dispatch(deleteTeacher(record.id)).then(() =>
      dispatch(fetchTeachers(teacherReducer.teachers.number, 20))
    );
  };
  //const search = useLocation().search;
  //const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    if(pageNumber<=0){
      dispatch(fetchTeachers(0, 20));
    }
  
  }, []);

  const handleTableChange = (e) => {
    dispatch(fetchTeachers(e.current - 1, 20));
  };

  const openTeacherNewModal = ()=> {
    dispatch(openModal({modalType:'TeacherNewModal',modalProps:{title: 'New Teacher'}}));
  }
  const openTeacherEditModal = ()=> {
    dispatch(openModal({modalType:'TeacherEditModal',modalProps:{title: 'Edit Teacher'}}));
  }
  const selectTeacher = (teacher)=> {
    dispatch(changeTeacher(teacher));
  } 

  if (teacherReducer.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={openTeacherNewModal}>New Teacher</Button>
      <Table
        columns={columns}
        dataSource={teacherReducer.teachers.content}
        pagination={{
          defaultCurrent: 1,
          current: teacherReducer.teachers.number + 1,
          pageSize: 20,
          total: teacherReducer.teachers.totalElements,
        }}
        onChange={handleTableChange}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  );
};

export default TeacherList;
