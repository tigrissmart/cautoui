import React, { useEffect, useState } from "react";
import { Table, Space, Popconfirm,Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchStudents, deleteStudent ,changeStudent} from "../../Store/Actions/studentActions";
import { openModal } from "../../Store/Actions/modalActions";

const { Column } = Table;

const StudentList = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "No",
      dataIndex: "no",
      key: "no",
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
      title: "Address",
      dataIndex: "address",
      key: "address",
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
        studentReducer.students.content.length >= 1 ? (
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
  const studentReducer = useSelector((state) => state.studentReducer);
  const pageNumber = useSelector((state) => state.studentReducer.students.number);

  const onRowEditClick = (record) => {
    selectStudent(record);
    openStudentEditModal(record);
  };
  const onRowDeleteClick = (record) => {
    dispatch(deleteStudent(record.id)).then(() =>
      dispatch(fetchStudents(studentReducer.students.number, 20))
    );
  };
  //const search = useLocation().search;
  //const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    if(pageNumber<=0){
      dispatch(fetchStudents(0, 20));
    }
  
  }, []);

  const handleTableChange = (e) => {
    dispatch(fetchStudents(e.current - 1, 20));
  };

  const openStudentNewModal = ()=> {
    dispatch(openModal({modalType:'StudentNewModal',modalProps:{title: 'New Student'}}));
  }
  const openStudentEditModal = ()=> {
    dispatch(openModal({modalType:'StudentEditModal',modalProps:{title: 'Edit Student'}}));
  }
  const selectStudent = (student)=> {
    dispatch(changeStudent(student));
  } 

  if (studentReducer.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={openStudentNewModal}>New Student</Button>
      <Table
        columns={columns}
        dataSource={studentReducer.students.content}
        pagination={{
          defaultCurrent: 1,
          current: studentReducer.students.number + 1,
          pageSize: 20,
          total: studentReducer.students.totalElements,
        }}
        onChange={handleTableChange}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  );
};

export default StudentList;
