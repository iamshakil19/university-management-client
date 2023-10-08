"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import {
  useGetSingleDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditDepartment = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading({
      key: "updateDepartment",
      content: "Updating...",
    });
    try {
      await updateDepartment({ id, body: values });
      message.success({
        key: "updateDepartment",
        content: "Department updated successfully.",
      });
    } catch (err: any) {
      message.error({
        key: "updateDepartment",
        content: err.message,
      });
    }
  };

  const defaultValues = {
    title: data?.title || "",
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
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department"> </ActionBar>
      <Form
        submitHandler={onSubmit}
        defaultValues={defaultValues}
        resolver={yupResolver(departmentSchema)}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartment;
