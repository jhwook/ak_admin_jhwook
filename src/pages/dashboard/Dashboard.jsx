import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sidebar } from "../../sidebar_data/sidebar_routes";
import Drawer from "../../Components/Drawer/Drawer";

export const Sidebar = () => {
  return (
    <Container>
      {sidebar.map((item, index) => (
        <Drawer
          key={index}
          title={item.title}
          path={item.path}
          childItems={item.Child}
          icon={item.Icon}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 230px;
  background: #ffffff;
  padding: 8px 0px 0 31px;
  box-shadow: 2px 0px 2px #e7eaf3;
  top: 0;
  left: 0;
`;
export const Link = styled(NavLink)`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #555555;
  margin-bottom: 10px;
`;
export default Sidebar;
