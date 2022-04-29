import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const MemberDetails = () => {
  return (
    <Container>
      <LinkCont>
        <NavLink className={({ isActive = true }) => (isActive ? "minting active" : "minting")} to="/memberDetails" end>
          Minting{" "}
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "market active" : "market")} to="market">
          Market
        </NavLink>
      </LinkCont>
      <Outlet />

      {/* <MemberDetailsTable /> */}
    </Container>
  );
};

const LinkCont = styled.div`
  padding-top: 62px;
  padding-bottom: 48px;
  padding-left: 73px;
  .market {
    margin-left: 63px;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #7a7a7a;
  }

  .lend {
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

const CardHead = styled.div`
  margin-bottom: 20px;
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MemberDetails;
