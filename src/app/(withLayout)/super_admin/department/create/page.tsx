import BreadCrumb from "@/components/ui/BreadCrumb";
import React from "react";

const CreateDepartment = () => {
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
    </div>
  );
};

export default CreateDepartment;
