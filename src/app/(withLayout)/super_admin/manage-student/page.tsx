"use client";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudents = () => {
  const { role } = getUserInfo() as any;
  return (
    <>
      <BreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <ActionBar title="Student List">
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
    </>
  );
};

export default ManageStudents;
