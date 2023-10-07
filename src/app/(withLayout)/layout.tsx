"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router]);
  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
