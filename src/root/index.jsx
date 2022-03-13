import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Home/navbar";
import Routers from "../Routers";

export const Root = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <Sidebar />
        <Routers />
      </MainContent>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Root;
