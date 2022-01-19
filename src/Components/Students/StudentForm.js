import React from "react";
import { Row, Col, Button } from "antd";
import { Form, Field } from "formik";
import { AntInput } from "../../Libs/CreateAntdFields";
import { isRequired } from "../../Libs/ValidateFields";

import { useDispatch } from "react-redux";
import { closeModal } from "../../Store/Actions/modalActions";

const StudentForm = ({ handleSubmit, values, submitCount }) => {
  const dispatch = useDispatch();
  return (
    
    <Form
      className="form-container"
      onSubmit={handleSubmit}

    >
      <Row>
        <Col span={24}>
          <label>No</label>
          <Field
            component={AntInput}
            name="no"
            type="text"
            validate={isRequired}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <label>Firstname</label>
          <Field
            component={AntInput}
            name="firstname"
            type="text"
            validate={isRequired}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <label>Lastname</label>
          <Field
            component={AntInput}
            name="lastname"
            type="text"
            validate={isRequired}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <label>Address</label>
          <Field
            component={AntInput}
            name="address"
            type="text"
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>
      <Row>
        <div className="submit-container">
          <br></br>
          {/* <button className="ant-btn ant-btn-primary" type="submit">
            Submit
          </button> */}
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              borderColor: "green",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
         </div>
      </Row>
    </Form>
  );
};

export default StudentForm;
