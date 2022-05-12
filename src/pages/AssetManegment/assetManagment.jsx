import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import AssetTable from "./Table";

export const AssetManagment = () => {
  return (
    <Container>
      <Wrapper>
        <h1>스왑관리</h1>
        <CardHead>
          <select className="selectCont" aria-label="Default select example">
            <option selected>10개씩 보기 </option>
            <option selected>20개씩 보기</option>
          </select>
          <div className="CalendarCont">
            <input className="data" placeholder="2022-01-18 ~ 2202-01-28" />
            <CalendarMonthOutlined className="iconCont" />
          </div>
          <div className="SearchCont">
            <input className="search" placeholder="검석" />{" "}
            <SearchOutlined className="iconSerach" />
          </div>

          <div className="excel">EXCEL</div>
        </CardHead>

        <WrapperTable>
          {" "}
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
                <td>Table cell</td>
                <td>AKD Dollar</td>
                <td>AkD</td>
                <td>2022-01-29 11:00:00</td>
                <td>264,321</td>
                <td> 155,506</td>
                <td> 155,506</td>
                <td> 155,506</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>AKD Dollar</td>
                <td>AkD</td>
                <td>2022-01-29 11:00:00</td>
                <td>264,321</td>
                <td> 155,506</td>
                <td> 155,506</td>
              </tr>
            </tbody>
          </Table>
        </WrapperTable>
        <Paginotion>
          <Stack>
            <Pagination count={2} shape="rounded" />
          </Stack>
        </Paginotion>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  margin: 44px;
  display: flex;
  flex-direction: column;
`;
const CardHead = styled.div`
  width: 100%;
  display: flex;
  .excel {
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .selectCont {
    width: 160px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
    margin-right: auto;
  }
  .CalendarCont {
    position: relative;
    display: flex;
    align-items: center;
    .data {
      width: 298px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 20px;
    }
    .iconCont {
      position: relative;
      right: 40px;
    }
  }

  .SearchCont {
    position: relative;
    display: flex;
    align-items: center;
    .search {
      width: 298px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 20px;
    }
    .iconSerach {
      position: relative;
      right: 40px;
    }
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
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
  thead {
    border: 1px solid #d9d9d9;
  }
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default AssetManagment;
