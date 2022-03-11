import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navbar";
import Signin from "./Components/Signin";
export const App = () => {
  return (
    <AppBox>
      <Navbar />
      <Signin />
      <h1 className="bg-black">ss</h1>
    </AppBox>
  );
};

const AppBox = styled.div`
  background: #e5e5e5;
  width: auto;
  height: 100vh;
`;
export default App;
