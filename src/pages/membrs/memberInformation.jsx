import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Switch } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { api } from "../../boot/axios";
export const MemberInformation = () => {
  const userInfo = useLocation().state;
  const [active, setActive] = useState(userInfo.active === 1 ? true : false);
  console.log(userInfo);
  console.log(active);

  const onclick_user_active_btn = () => {
    if (userInfo) {
      axios
        .put(api.API_SET_ACTIVE_USER + `/${userInfo.username}`, { active: active ? 1 : 0 })
        .then((res) => {
          if (res.data.status === "OK") {
            alert("succed modify userInfo");
            navigator("/members");
          } else {
            alert("Falied");
          }
        })
        .catch((err) => {});
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>
            회원정보 확인 <ArrowForwardIosIcon />{" "}
          </h1>
          <p>{userInfo.username} </p>
        </Title>

        <Card>
          <CardCont>
            <TableCont>
              <TabdleCad>
                <TableLeft>지갑주소</TableLeft>
                <TableRight>{userInfo.username} </TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>가입일</TableLeft>
                <TableRight>{userInfo.createdat} </TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>닉네임</TableLeft>
                <TableRight>{userInfo.nickname}</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>프로필 아이템</TableLeft>
                <TableRight>{userInfo.profileimgurl}</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>예치량</TableLeft>
                <TableRight>{userInfo.stakeamount ? userInfo.stakeamount : '-'}</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>출금량</TableLeft>
                <TableRight>출금량</TableRight>
              </TabdleCad>
            </TableCont>
            <TableCont>
              <TabdleCad>
                <TableLeft>거래횟수</TableLeft>
                <TableRight>2????</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>수익률</TableLeft>
                <TableRight>+102.12%??????</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>보유 아이템</TableLeft>
                <TableRight>@Friends #002 ( Lv.2), Friends #078 ( Lv.1)??????</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>보유 AKD</TableLeft>
                <TableRight>186 AKD???????</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>보유 AKG</TableLeft>
                <TableRight>186 AKG???????</TableRight>
              </TabdleCad>
              <TabdleCad>
                <TableLeft>계정 활성</TableLeft>
                <TableRight>
                  <Switch
                    checked={active}
                    onChange={() => {
                      setActive(!active);
                    }}
                  />{" "}
                </TableRight>
              </TabdleCad>
            </TableCont>
          </CardCont>
        </Card>
        <button className="memInfo" onClick={onclick_user_active_btn}>
          저장
        </button>
      </Wrapper>
    </Container>
  );
};
const TableCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardCont = styled.div`
  display: flex;
`;
const Card = styled.div`
  display: flex;
`;
const TabdleCad = styled.div`
  display: flex;
`;

const TableLeft = styled.div`
  padding-left: 20px;
  width: 190px;
  height: 55px;
  background: #f6f6f6;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;
const TableRight = styled.div`
  padding-left: 60px;
  height: 55px;
  width: 523px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px;
`;

const Wrapper = styled.div`
  .memInfo {
    margin-top: 24px;
    margin-left: 1264px;
    width: 162px;
    height: 44px;
    background: #4876ef;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
  width: 1526px;
  height: 654px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 34px 50px;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;
    color: #4876ef;
  }
`;

export default MemberInformation;
