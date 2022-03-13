import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import { sidebar } from "../../cssFonts/Sidebar";
export const Sidebar = () => {
  return (
    <Container>
      <Card>
        {sidebar.map(({ title, Icon, path }, id) => (
          <Link key={id} to={path}>
            {title}
          </Link>
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 230px;
  background: #ffffff;
  padding: 8px 0px 0 31px;
  box-shadow: 2px 0px 2px #e7eaf3;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #555555;
`;
const Icons = styled.img`
  width: 26px;
  height: 26px;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
