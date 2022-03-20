import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoNav from "../../assets/icons/unnamed copy 2.svg";
import Vector from "../../assets/icons/Vector.svg";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(() => !open);
  }
  return (
    <Container>
      <Wrapper>
        <Logo src={LogoNav} />
        <Link to="/" className="navLogo">
          AK Friends
        </Link>
        <Title>
          <h1 onClick={handleClick}>
            General admin <Outline src={Vector} />
          </h1>
          <button className="NavBtn">Connect Wallet</button>
        </Title>
      </Wrapper>
      {open && (
        <Logout>
          <LogOutHead>
            <p>test</p>
            <div className="static">상세</div>
          </LogOutHead>

          <Border />
          <div className="pwp">
            <p>PW 변경</p>
            <p>로그인 기록</p>
          </div>
          <div className="exit">로그아웃</div>
        </Logout>
      )}
    </Container>
  );
};
const Border = styled.div`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
`;
const LogOutHead = styled.div`
  display: flex;
  width: 100%;
  gap: 130px;
  padding: 24px 24px 0 24px;
  .static {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 24px;
    border: 1px solid #4876ef;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4876ef;
    cursor: pointer;
  }
`;
const Logout = styled.div`
  position: absolute;
  width: 248px;
  height: 201px;
  left: 1466px;
  top: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  .pwp {
    padding: 0px 0px 0px 24px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #7a7a7a;
  }
  .exit {
    border-radius: 0 0 8px 8px;
    width: 248px;
    height: 50px;
    background: #f1f2f4;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7a7a7a;
    cursor: pointer;
  }
`;
const Outline = styled.img``;
const Title = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 21px;
  .NavBtn {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    width: 160px;
    height: 36px;
  }
  h1 {
    gap: 7px;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04em;
    margin-top: 6px;
    color: #ffffff;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  padding-right: 31px;
  display: flex;
  width: 100%;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background: #21325b;
  color: #ffffff;
  width: 100%;

  .navLogo {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.04em;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
const Logo = styled.img`
  margin-left: 17px;
  width: 58px;
  height: 58px;
  mix-blend-mode: exclusion;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export default Navbar;
