"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
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
    return <p>Loading...</p>;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
