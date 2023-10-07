import BreadCrumb from "@/components/ui/BreadCrumb";
import React from "react";

const CreateFaculty = () => {
  const base = "super_admin";
  return (
    <>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
    </>
  );
};

export default CreateFaculty;
