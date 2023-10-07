import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import React from "react";

const ManageUser = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="User List"></ActionBar>
    </div>
  );
};

export default ManageUser;
