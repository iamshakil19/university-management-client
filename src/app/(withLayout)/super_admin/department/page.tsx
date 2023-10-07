import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
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
      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default Department;
