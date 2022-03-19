import { Switch } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const AdminSetting = () => {
  let navigation = useNavigate();

  return (
    <Container>
      <Wrapper>
        <h1>관리자 계정관리</h1>
        <CardHead>
          <select aria-label="Default select example">
            <option selected>10개씩 보기</option>
            <option selected>20개씩 보기</option>
          </select>

          <input className="data" placeholder="2022-01-18 ~ 2202-01-28"></input>
          <input className="search" placeholder="검석"></input>
          <button className="excel">등록</button>
        </CardHead>

        <WrapperTable>
          <Boreder />
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>관리자 ID</th>
                <th>관리자 PW</th>
                <th>관리자 이름</th>
                <th>등록일</th>
                <th>수정일</th>
                <th>연락처</th>
                <th>그룹명</th>
                <th>사용여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </WrapperTable>
      </Wrapper>
    </Container>
  );
};

const Boreder = styled.div`
  border: 1px solid #d9d9d9;
`;
const Container = styled.div`
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
  margin-top: 24px;
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
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
  tbody {
    tr:hover {
      background: #f5f5f5;
    }
  }
`;
export default AdminSetting;
