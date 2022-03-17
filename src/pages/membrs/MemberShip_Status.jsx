import React from "react";

import styled from "styled-components";
import MembersTabele from "./MemberShib_Tabel";
export const MemberShipStatus = () => {

  return (
    <Container>
        <MembersTabele/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 44px;
  h1{
    margin: 34px 50px;

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
  }
`;
const Card = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1526px;
  height: 734px;
  padding:50px ;

`
const WrapperBtn = styled.div`
display: flex;

`
const Wrappersearch = styled.div`
display: flex;
margin-left: 880px;

`
const CardWrapper = styled.div`
display: flex;
padding:0 50px  24px;

`
export default MemberShipStatus;
