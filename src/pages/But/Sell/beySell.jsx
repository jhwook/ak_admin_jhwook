import { Pagination, Stack } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const BeySell = () => {
  return (
    <Container>
      <LinkCont>
        <NavLink
          className={({ isActive }) => (isActive ? "market active" : "market")}
          to="buy" end
        >
          Buy
        </NavLink>
        <NavLink
          className={({ isActive = true }) =>
            isActive ? "minting active" : "minting"
          }
          to="sell"
        >
          Sell
        </NavLink>
      </LinkCont>
      <Outlet />
    </Container>
  );
};
const LinkCont = styled.div`
  padding-top: 62px;
  padding-bottom: 48px;
  padding-left: 73px;
  width: 46px;
  height: 36px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;

  .market {
    margin-left: 63px;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #7a7a7a;
  }
  .minting {
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #7a7a7a;
  }
  .active {
    border-bottom: 6px solid #4876ef;
    color: #000000;
  }
`;
const Container = styled.div`
  .buysell {
    display: flex;
    h1 {
      margin-left: 20px;
    }
  }

  margin: 44px;
  display: flex;
  flex-direction: column;
  .data {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    width: 298px;
    height: 44px;
    margin-right: 14px;
    padding: 20px;
  }
  .search {
    width: 240px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 24px;
    padding: 20px;
  }
  .excel {
    border: none;
    width: 162px;
    height: 44px;
    background: #4876ef;
    border-radius: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
`;
const CardHead = styled.div`
  width: 100%;
  height: 44px;
  select {
    margin-right: 526px;
    width: 160px;
    height: 44px;

    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  width: 1526px;
  height: 734px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const WrapperTable = styled.div`
  margin-top: 24px;
  table {
    tr:hover {
      background-color: #d9d9d9;
    }
  }
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default BeySell;
