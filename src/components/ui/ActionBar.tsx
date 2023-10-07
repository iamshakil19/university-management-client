type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 style={{ margin: "10px 0px" }}>{title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default ActionBar;
