import React, { useEffect, useState } from "react";
import { Table, Space, Popconfirm,Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchCourses, deleteCourse ,changeCourse} from "../../Store/Actions/courseActions";
import { openModal } from "../../Store/Actions/modalActions";

const { Column } = Table;

const CourseList = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
   
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
        courseReducer.courses.content.length >= 1 ? (
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
  const courseReducer = useSelector((state) => state.courseReducer);
  const pageNumber = useSelector((state) => state.courseReducer.courses.number);

  const onRowEditClick = (record) => {
    selectCourse(record);
    openCourseEditModal(record);
  };
  const onRowDeleteClick = (record) => {
    dispatch(deleteCourse(record.id)).then(() =>
      dispatch(fetchCourses(courseReducer.courses.number, 20))
    );
  };
  //const search = useLocation().search;
  //const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    if(pageNumber<=0){
      dispatch(fetchCourses(0, 20));
    }
  
  }, []);

  const handleTableChange = (e) => {
    dispatch(fetchCourses(e.current - 1, 20));
  };

  const openCourseNewModal = ()=> {
    dispatch(openModal({modalType:'CourseNewModal',modalProps:{title: 'New Course'}}));
  }
  const openCourseEditModal = ()=> {
    dispatch(openModal({modalType:'CourseEditModal',modalProps:{title: 'Edit Course'}}));
  }
  const selectCourse = (course)=> {
    dispatch(changeCourse(course));
  } 

  if (courseReducer.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={openCourseNewModal}>New Course</Button>
      <Table
        columns={columns}
        dataSource={courseReducer.courses.content}
        pagination={{
          defaultCurrent: 1,
          current: courseReducer.courses.number + 1,
          pageSize: 20,
          total: courseReducer.courses.totalElements,
        }}
        onChange={handleTableChange}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  );
};

export default CourseList;
