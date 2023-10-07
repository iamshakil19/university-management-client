"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelectField";
import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Student Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelect
            name="student.academicDepartment"
            size="large"
            options={acDepartmentOptions}
            label="Academic Department"
            placeholder="Select Academic Department"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelect
            name="student.academicFaculty"
            size="large"
            options={facultyOptions}
            label="Academic Faculty"
            placeholder="Select Academic Faculty"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelect
            name="student.academicSemester"
            size="large"
            options={acSemesterOptions}
            label="Academic Semester"
            placeholder="Select Academic Semester"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelect
            name="student.gender"
            size="large"
            options={genderOptions}
            label="Gender"
            placeholder="Select Gender"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
