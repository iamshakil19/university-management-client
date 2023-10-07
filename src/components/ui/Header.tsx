import { Layout, Row, Button, Dropdown, Space, Avatar } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const { role } = getUserInfo() as any;
  return (
    <AntHeader
      style={{
        background: "#fff",
      }}
    >
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Space wrap size={16}>
            <Avatar
              style={{ cursor: "pointer" }}
              size="large"
              icon={<UserOutlined />}
            />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
