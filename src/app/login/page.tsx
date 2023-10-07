import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | University Management",
  description: "University Management Login Page",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
