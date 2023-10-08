"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const AdminCreate = () => {
  const { data, isLoading } = useGetDepartmentsQuery({ limit: 100, page: 1 });
  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();

  //@ts-ignore
  const departments: IDepartment[] = data?.departments;

  const departmentOptions =
    departments &&
    departments?.map((department) => {
      return {
        label: department?.title,
        value: department?.id,
      };
    });

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    message.loading({
      key: "createDepartment",
      content: "Creating...",
    });
    try {
      await addAdminWithFormData(formData);
      message.success({
        key: "createDepartment",
        content: "Successfully created",
      });
    } catch (error: any) {
      message.error({
        key: "createDepartment",
        content: error.message,
      });
    }
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <ActionBar title="Create Admin"></ActionBar>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  name="admin.gender"
                  size="large"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select gender"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  name="admin.managementDepartment"
                  size="large"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select Department"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>

          {/* Basic Info Form */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact Number"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact Number"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminCreate;
