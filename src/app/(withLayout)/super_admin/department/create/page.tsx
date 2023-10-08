"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Form from "@/components/Forms/Form";
import { Button, Col, Row, message } from "antd";
import FormInput from "@/components/Forms/FormInput";
import { departmentSchema } from "@/schemas/admin";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading({
      key: "createDepartment",
      content: "Creating...",
    });
    try {
      await addDepartment(data);
      message.success({
        key: "createDepartment",
        content: "Department added successfully",
      });
    } catch (err: any) {
      message.error({
        key: "createDepartment",
        content: err.message,
      });
    }
  };
  const base = "super_admin";
  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>

      <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;
