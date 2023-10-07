import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
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
      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;
