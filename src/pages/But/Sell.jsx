import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Sell = () => {
  return (
    <Container>
      <Wrapper>
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
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>거래일시</th>
                <th>계정</th>
                <th>출금 Token</th>
                <th>출금금액</th>
                <th>체결상태</th>
                <th>수수료</th>
                <th>정산금액</th>
                <th>Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>

              <tr>
                <td>3</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>

              <tr>
                <td>4</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>

              <tr>
                <td>5</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>

              <tr>
                <td>6</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
              </tr>
            </tbody>
          </Table>

          {/* <BuysellTable/> */}
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
      right: 55px;
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
      right: 55px;
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
`;

const WrapperTable = styled.div`
  margin-top: 24px;

  tbody {
    cursor: pointer;
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
export default Sell;
