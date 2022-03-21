import styled from "styled-components";
import Dashboard from "../pages/dashboard/Dashboard";
import Navbar from "../pages/Home/navbar";
import Routers from "../Routers";

export const Root = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        {/* <Dashboard /> */}
        {/* <Routers /> */}
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
