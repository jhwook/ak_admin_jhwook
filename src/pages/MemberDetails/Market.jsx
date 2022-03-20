import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
export const Market = () => {
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
          <Border />
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>거래일시</th>
                <th>아이템</th>
                <th>가격</th>
                <th>거래번호</th>
                <th>거래방식</th>
                <th>체결상태</th>
                <th>결제금액</th>
                <th>판매자</th>
                <th>구매자</th>
                <th>수수료</th>
                <th>Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> 2022-01-12 09:50:11</td>
                <td>Friends #002</td>
                <td>100 AKD</td>
                <td>Or 13</td>
                <td>경매</td>
                <td>진행중</td>
                <td> 100 AKD</td>
                <td>@Kimsdjfkdfl</td>
                <td>@ioimmoj</td>
                <td>0.25 AKD</td>
                <td>0x5906a5c0e5747ee...</td>
              </tr>
              <tr>
                <td>1</td>
                <td> 2022-01-12 09:50:11</td>
                <td>Friends #002</td>
                <td>100 AKD</td>
                <td>Or 13</td>
                <td>경매</td>
                <td>진행중</td>
                <td> 100 AKD</td>
                <td>@Kimsdjfkdfl</td>
                <td>@ioimmoj</td>
                <td>0.25 AKD</td>
                <td>0x5906a5c0e5747ee...</td>
              </tr>
              <tr>
                <td>1</td>
                <td> 2022-01-12 09:50:11</td>
                <td>Friends #002</td>
                <td>100 AKD</td>
                <td>Or 13</td>
                <td>경매</td>
                <td>진행중</td>
                <td> 100 AKD</td>
                <td>@Kimsdjfkdfl</td>
                <td>@ioimmoj</td>
                <td>0.25 AKD</td>
                <td>0x5906a5c0e5747ee...</td>
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
              <td></td>
              <td></td>
              <td></td>
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

const Border = styled.div`
  border: 1px solid #d9d9d9;
`;
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
  height: 529px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  tbody {
    tr:hover {
      background-color: #d9d9d9;
    }
  }
  table {
    cursor: pointer;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default Market;
